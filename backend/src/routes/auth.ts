import { Router } from 'express';

const router = Router();

// Register user
router.post('/register', async (req, res) => {
  try {
    res.status(201).json({
      success: true,
      message: 'User registered successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Login user
router.post('/login', async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: 'User logged in successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Logout user
router.post('/logout', async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: 'User logged out successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

export default router; 