import { Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Database schema types
export interface AddressTable {
  id: string;
  user_id: string;
  address: string;
  is_default: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface Database {
  users: UserTable;
  products: ProductTable;
  orders: OrderTable;
  order_items: OrderItemTable;
  categories: CategoryTable;
  cart_items: CartItemTable;
  addresses: AddressTable;
}

export interface UserTable {
  id: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  role: 'user' | 'admin';
  phone?: string;
  address?: string;
  created_at: Date;
  updated_at: Date;
}

export interface ProductTable {
  id: string;
  name: string;
  description: string;
  price: number;
  stock_quantity: number;
  category_id: string;
  image_url?: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface CategoryTable {
  id: string;
  name: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
}

export interface OrderTable {
  id: string;
  user_id: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total_amount: number;
  shipping_address: string;
  payment_status: 'pending' | 'paid' | 'failed';
  created_at: Date;
  updated_at: Date;
}

export interface OrderItemTable {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  price: number;
  created_at: Date;
}

export interface CartItemTable {
  id: string;
  user_id: string;
  product_id: string;
  quantity: number;
  created_at: Date;
  updated_at: Date;
}

// Create database instance
const dialect = new PostgresDialect({
  pool: new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
  }),
});

export const db = new Kysely<Database>({
  dialect,
});

// Database connection test
export const testConnection = async (): Promise<void> => {
  try {
    // Just test the connection without querying tables
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
    
    const client = await pool.connect();
    await client.query('SELECT 1');
    client.release();
    await pool.end();
    
    console.log('✅ PostgreSQL connected successfully');
  } catch (error) {
    console.error('❌ PostgreSQL connection failed:', error);
    throw error;
  }
};

// Close database connection
export const closeConnection = async (): Promise<void> => {
  await db.destroy();
  console.log('🔌 PostgreSQL connection closed');
}; 