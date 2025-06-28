import { Router } from 'express';

const router = Router();

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