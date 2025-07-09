import { Router } from 'express';
import { db } from '../config/database';
import { requireAuth, requireOwner, AuthRequest } from '../middleware/auth';

const router = Router();

// Add a new medicine/product (owner only)
router.post('/', requireAuth, requireOwner, async (req: AuthRequest, res) => {
  try {
    const { name, description, price, stock_quantity, category, image_url } = req.body;
    if (!name || !description || !price || !stock_quantity || !category || !image_url) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }
    // Find or create category
    let cat = await db.selectFrom('categories').selectAll().where('name', '=', category).executeTakeFirst();
    if (!cat) {
      cat = await db.insertInto('categories').values({ name: category, description: '' } as any).returningAll().executeTakeFirst();
    }
    if (!cat) {
      return res.status(500).json({ success: false, message: 'Failed to create/find category' });
    }
    const product = await db.insertInto('products').values({
      name,
      description,
      price: parseFloat(price),
      stock_quantity: parseInt(stock_quantity),
      category_id: cat.id,
      image_url,
      is_active: true
    } as any).returningAll().executeTakeFirst();
    return res.status(201).json({ success: true, product });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Get all products
router.get('/', async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Products retrieved successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Get single product
router.get('/:id', async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Product retrieved successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

export default router; 