import { Router } from 'express';
import { db } from '../config/database';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();

const JWT_SECRET = process.env.JWT_SECRET || 'changeme';
const OWNER_EMAIL = 'owner@medicine.com'; // fixed owner email

// Register user (not owner)
router.post('/register', async (req, res) => {
  try {
    const { email, password, first_name, last_name, phone, address } = req.body;
    if (!email || !password || !first_name || !last_name) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }
    if (email === OWNER_EMAIL) {
      return res.status(403).json({ success: false, message: 'Cannot register as owner' });
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
    return res.status(201).json({ success: true, message: 'User registered', user: { ...user, password: undefined } });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Login (owner or user)
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Missing email or password' });
    }
    const user = await db.selectFrom('users').selectAll().where('email', '=', email).executeTakeFirst();
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    // Only allow owner login for fixed email
    if (user.role === 'owner' && user.email !== OWNER_EMAIL) {
      return res.status(403).json({ success: false, message: 'Not authorized as owner' });
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

export default router; 