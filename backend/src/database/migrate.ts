import { Kysely, PostgresDialect, sql } from 'kysely';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const dialect = new PostgresDialect({
  pool: new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
  }),
});

const db = new Kysely({
  dialect,
});

async function migrate() {
  try {
    console.log('🔄 Starting database migration...');

    // Create users table
    await db.schema
      .createTable('users')
      .ifNotExists()
      .addColumn('id', 'uuid', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
      .addColumn('email', 'varchar(255)', (col) => col.notNull().unique())
      .addColumn('password', 'varchar(255)', (col) => col.notNull())
      .addColumn('first_name', 'varchar(100)', (col) => col.notNull())
      .addColumn('last_name', 'varchar(100)', (col) => col.notNull())
      .addColumn('role', sql`varchar(20)`, (col) => col.notNull().defaultTo('user'))
      .addColumn('phone', 'varchar(20)')
      .addColumn('address', 'text')
      .addColumn('created_at', 'timestamp', (col) => col.notNull().defaultTo(sql`now()`))
      .addColumn('updated_at', 'timestamp', (col) => col.notNull().defaultTo(sql`now()`))
      .execute();

    // Create categories table
    await db.schema
      .createTable('categories')
      .ifNotExists()
      .addColumn('id', 'uuid', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
      .addColumn('name', 'varchar(100)', (col) => col.notNull().unique())
      .addColumn('description', 'text')
      .addColumn('created_at', 'timestamp', (col) => col.notNull().defaultTo(sql`now()`))
      .addColumn('updated_at', 'timestamp', (col) => col.notNull().defaultTo(sql`now()`))
      .execute();

    // Create products table
    await db.schema
      .createTable('products')
      .ifNotExists()
      .addColumn('id', 'uuid', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
      .addColumn('name', 'varchar(255)', (col) => col.notNull())
      .addColumn('description', 'text', (col) => col.notNull())
      .addColumn('price', sql`decimal(10,2)`, (col) => col.notNull())
      .addColumn('stock_quantity', 'integer', (col) => col.notNull().defaultTo(0))
      .addColumn('category_id', 'uuid', (col) => col.notNull().references('categories.id'))
      .addColumn('image_url', 'varchar(500)')
      .addColumn('is_active', 'boolean', (col) => col.notNull().defaultTo(true))
      .addColumn('created_at', 'timestamp', (col) => col.notNull().defaultTo(sql`now()`))
      .addColumn('updated_at', 'timestamp', (col) => col.notNull().defaultTo(sql`now()`))
      .execute();

    // Create orders table
    await db.schema
      .createTable('orders')
      .ifNotExists()
      .addColumn('id', 'uuid', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
      .addColumn('user_id', 'uuid', (col) => col.notNull().references('users.id'))
      .addColumn('status', sql`varchar(20)`, (col) => col.notNull().defaultTo('pending'))
      .addColumn('total_amount', sql`decimal(10,2)`, (col) => col.notNull())
      .addColumn('shipping_address', 'text', (col) => col.notNull())
      .addColumn('payment_status', sql`varchar(20)`, (col) => col.notNull().defaultTo('pending'))
      .addColumn('created_at', 'timestamp', (col) => col.notNull().defaultTo(sql`now()`))
      .addColumn('updated_at', 'timestamp', (col) => col.notNull().defaultTo(sql`now()`))
      .execute();

    // Create order_items table
    await db.schema
      .createTable('order_items')
      .ifNotExists()
      .addColumn('id', 'uuid', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
      .addColumn('order_id', 'uuid', (col) => col.notNull().references('orders.id'))
      .addColumn('product_id', 'uuid', (col) => col.notNull().references('products.id'))
      .addColumn('quantity', 'integer', (col) => col.notNull())
      .addColumn('price', sql`decimal(10,2)`, (col) => col.notNull())
      .addColumn('created_at', 'timestamp', (col) => col.notNull().defaultTo(sql`now()`))
      .execute();

    // Create cart_items table
    await db.schema
      .createTable('cart_items')
      .ifNotExists()
      .addColumn('id', 'uuid', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
      .addColumn('user_id', 'uuid', (col) => col.notNull().references('users.id'))
      .addColumn('product_id', 'uuid', (col) => col.notNull().references('products.id'))
      .addColumn('quantity', 'integer', (col) => col.notNull().defaultTo(1))
      .addColumn('created_at', 'timestamp', (col) => col.notNull().defaultTo(sql`now()`))
      .addColumn('updated_at', 'timestamp', (col) => col.notNull().defaultTo(sql`now()`))
      .execute();

    // Create addresses table
    await db.schema
      .createTable('addresses')
      .ifNotExists()
      .addColumn('id', 'uuid', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
      .addColumn('user_id', 'uuid', (col) => col.notNull().references('users.id'))
      .addColumn('address', 'text', (col) => col.notNull())
      .addColumn('is_default', 'boolean', (col) => col.notNull().defaultTo(false))
      .addColumn('created_at', 'timestamp', (col) => col.notNull().defaultTo(sql`now()`))
      .addColumn('updated_at', 'timestamp', (col) => col.notNull().defaultTo(sql`now()`))
      .execute();

    console.log('✅ Database migration completed successfully!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    throw error;
  } finally {
    await db.destroy();
  }
}

migrate().catch(console.error); 