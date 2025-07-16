import { Router } from 'express';
import { db } from '../config/database';
import { requireAuth, AuthRequest } from '../middleware/auth';

const router = Router();

// Get user profile + addresses
router.get('/profile', requireAuth, async (req: AuthRequest, res) => {
  try {
    const user = await db.selectFrom('users').selectAll().where('id', '=', req.user!.id).executeTakeFirst();
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    const addresses = await db.selectFrom('addresses').selectAll().where('user_id', '=', req.user!.id).orderBy('created_at').execute();
    return res.status(200).json({ success: true, user: { ...user, password: undefined }, addresses });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Update user profile
router.put('/profile', requireAuth, async (req: AuthRequest, res) => {
  try {
    const { first_name, last_name, phone } = req.body;
    await db.updateTable('users')
      .set({ first_name, last_name, phone })
      .where('id', '=', req.user!.id)
      .execute();
    return res.status(200).json({ success: true, message: 'User profile updated successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

// List addresses
router.get('/addresses', requireAuth, async (req: AuthRequest, res) => {
  try {
    const addresses = await db.selectFrom('addresses').selectAll().where('user_id', '=', req.user!.id).orderBy('created_at').execute();
    return res.status(200).json({ success: true, addresses });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Add address (max 3)
router.post('/addresses', requireAuth, async (req: AuthRequest, res) => {
  try {
    const { address, is_default } = req.body;
    const count = await db.selectFrom('addresses').selectAll().where('user_id', '=', req.user!.id).execute();
    if (count.length >= 3) return res.status(400).json({ success: false, message: 'Maximum 3 addresses allowed' });
    if (is_default) {
      // Unset previous default
      await db.updateTable('addresses').set({ is_default: false }).where('user_id', '=', req.user!.id).execute();
    }
    const newAddress = await db.insertInto('addresses').values({ user_id: req.user!.id, address, is_default: !!is_default } as any).returningAll().executeTakeFirst();
    return res.status(201).json({ success: true, address: newAddress });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Update address
router.put('/addresses/:id', requireAuth, async (req: AuthRequest, res) => {
  try {
    const { address, is_default } = req.body;
    if (is_default) {
      await db.updateTable('addresses').set({ is_default: false }).where('user_id', '=', req.user!.id).execute();
    }
    await db.updateTable('addresses').set({ address, is_default: !!is_default }).where('id', '=', req.params.id).where('user_id', '=', req.user!.id).execute();
    return res.status(200).json({ success: true, message: 'Address updated' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Delete address
router.delete('/addresses/:id', requireAuth, async (req: AuthRequest, res) => {
  try {
    await db.deleteFrom('addresses').where('id', '=', req.params.id).where('user_id', '=', req.user!.id).execute();
    return res.status(200).json({ success: true, message: 'Address deleted' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

// (Optional) Save address from current location (stub)
router.post('/addresses/current-location', requireAuth, async (req: AuthRequest, res) => {
  // You can implement geocoding here if needed
  return res.status(501).json({ success: false, message: 'Not implemented' });
});

export default router; 