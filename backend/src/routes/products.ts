import { Router } from 'express';
import { db } from '../config/database';
import { requireAuth, requireAdmin, AuthRequest } from '../middleware/auth';
import multer from 'multer';
import cloudinary from '../config/cloudinary';
import streamifier from 'streamifier';

const router = Router();

const upload = multer();

// Add a new medicine/product (owner only)
router.post('/', requireAuth, requireAdmin, upload.single('image'), async (req: AuthRequest, res) => {
  try {
    console.log('--- Add Product Request ---');
    console.log('req.body:', req.body);
    console.log('req.file:', req.file);
    const { name, description, price, stock_quantity, category } = req.body;
    let image_url = req.body.image_url;
    if (req.file) {
      // Upload to Cloudinary
      const streamUpload = () => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: 'medistore/products' },
            (error: any, result: any) => {
              if (result) resolve(result.secure_url);
              else reject(error);
            }
          );
          streamifier.createReadStream(req.file!.buffer).pipe(stream);
        });
      };
      image_url = await streamUpload();
      console.log('Uploaded image_url:', image_url);
    }
    if (!name || !description || !price || !stock_quantity || !category || !image_url) {
      console.log('Missing required fields:', { name, description, price, stock_quantity, category, image_url });
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
    console.error('Add Product Error:', error);
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