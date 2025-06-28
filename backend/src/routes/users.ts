import { Router } from 'express';

const router = Router();

// Get user profile
router.get('/profile', async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: 'User profile retrieved successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Update user profile
router.put('/profile', async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: 'User profile updated successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

export default router; 