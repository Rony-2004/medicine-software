import { Router } from 'express';

const router = Router();

// Admin dashboard stats
router.get('/dashboard', async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Admin dashboard data retrieved successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Get all users (admin only)
router.get('/users', async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Users retrieved successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Get all orders (admin only)
router.get('/orders', async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Orders retrieved successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

export default router; 