import { Router } from 'express';
import { db } from '../config/database';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();

const JWT_SECRET = process.env.JWT_SECRET || 'changeme';
const ADMIN_EMAIL = 'admin@gmail.com'; // fixed admin email

// Register user (not admin)
router.post('/register', async (req, res) => {
  try {
    const { email, password, first_name, last_name, phone, address } = req.body;
    if (!email || !password || !first_name || !last_name) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }
    if (email === ADMIN_EMAIL) {
      return res.status(403).json({ success: false, message: 'Cannot register as admin' });
    }
    const existing = await db.selectFrom('users').selectAll().where('email', '=', email).executeTakeFirst();
    if (existing) {
      return res.status(409).json({ success: false, message: 'Email already registered' });
    }
    const hashed = await bcrypt.hash(password, 12);
    const user = await db.insertInto('users').values({
      email,
      password: hashed,
      first_name,
      last_name,
      role: 'user',
      phone,
      address
    } as any).returningAll().executeTakeFirst();
    if (!user) return res.status(500).json({ success: false, message: 'User registration failed' });
    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
    return res.status(201).json({ success: true, message: 'User registered', token, user: { ...user, password: undefined } });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Login (admin or user)
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Missing email or password' });
    }
    // Prevent admin login via this endpoint
    if (email === ADMIN_EMAIL) {
      return res.status(403).json({ success: false, message: 'Use the admin login endpoint.' });
    }
    let user = await db.selectFrom('users').selectAll().where('email', '=', email).executeTakeFirst();
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
    return res.status(200).json({
      success: true,
      message: 'Logged in',
      token,
      user: { ...user, password: undefined }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Logout (dummy, handled client-side)
router.post('/logout', (req, res) => {
  res.status(200).json({ success: true, message: 'Logged out' });
});

// Admin login with fixed credentials
router.post('/admin/login', (req, res) => {
  const { email, password } = req.body;
  if (email === ADMIN_EMAIL && password === 'admin1234') {
    const token = jwt.sign({ email, role: 'admin' }, JWT_SECRET, { expiresIn: '7d' });
    return res.status(200).json({
      success: true,
      message: 'Admin logged in',
      token,
      user: { email, role: 'admin' }
    });
  }
  return res.status(401).json({ success: false, message: 'Invalid admin credentials' });
});

export default router; 