import { Router } from 'express';
import { db } from '../config/database';
import { requireAuth, requireAdmin, AuthRequest } from '../middleware/auth';
import { sql } from 'kysely';

const router = Router();

// Get user orders
router.get('/', requireAuth, async (req: AuthRequest, res) => {
  try {
    const orders = await db.selectFrom('orders')
      .selectAll()
      .where('user_id', '=', req.user!.id)
      .orderBy('created_at', 'desc')
      .execute();
    return res.status(200).json({ success: true, orders });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Create new order
router.post('/', requireAuth, async (req: AuthRequest, res) => {
  try {
    const { items, total, payment_method } = req.body;
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ success: false, message: 'No items in order' });
    }
    // For demo, shipping address is user's address (could be extended)
    const user = await db.selectFrom('users').selectAll().where('id', '=', req.user!.id).executeTakeFirst();
    if (!user) return res.status(400).json({ success: false, message: 'User not found' });
    const order = await db.insertInto('orders').values({
      user_id: req.user!.id,
      status: 'pending',
      total_amount: total,
      shipping_address: user.address || '',
      payment_status: payment_method === 'COD' ? 'pending' : 'paid',
    } as any).returningAll().executeTakeFirst();
    if (!order) return res.status(500).json({ success: false, message: 'Order creation failed' });
    // Insert order items
    for (const item of items) {
      await db.insertInto('order_items').values({
        order_id: order.id,
        product_id: item.id,
        quantity: item.quantity,
        price: item.price
      } as any).executeTakeFirst();
    }
    return res.status(201).json({ success: true, order });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Get single order (user)
router.get('/:id', requireAuth, async (req: AuthRequest, res) => {
  try {
    const order = await db.selectFrom('orders')
      .selectAll()
      .where('id', '=', req.params.id)
      .where('user_id', '=', req.user!.id)
      .executeTakeFirst();
    if (!order) return res.status(404).json({ success: false, message: 'Order not found' });
    const items = await db.selectFrom('order_items').selectAll().where('order_id', '=', order.id).execute();
    return res.status(200).json({ success: true, order: { ...order, items } });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Admin: Get all orders
router.get('/admin/all', requireAuth, requireAdmin, async (req, res) => {
  try {
    const orders = await db.selectFrom('orders').selectAll().orderBy('created_at', 'desc').execute();
    return res.status(200).json({ success: true, orders });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Admin: Update order status (accept, decline, packed, delivered, etc.)
router.patch('/admin/:id', requireAuth, requireAdmin, async (req, res) => {
  try {
    const { status } = req.body;
    const order = await db.selectFrom('orders').selectAll().where('id', '=', req.params.id).executeTakeFirst();
    if (!order) return res.status(404).json({ success: false, message: 'Order not found' });
    // If accepting, decrease stock
    if (status === 'accepted' && order.status === 'pending') {
      const items = await db.selectFrom('order_items').selectAll().where('order_id', '=', order.id).execute();
      for (const item of items) {
        await db.updateTable('products')
          .set({ stock_quantity: sql`stock_quantity - ${item.quantity}` })
          .where('id', '=', item.product_id)
          .execute();
      }
    }
    await db.updateTable('orders').set({ status }).where('id', '=', req.params.id).execute();
    return res.status(200).json({ success: true, message: 'Order status updated' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

export default router; 