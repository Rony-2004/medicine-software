import { Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { Database } from '../config/database';

dotenv.config();

const dialect = new PostgresDialect({
  pool: new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
  }),
});

const db = new Kysely<Database>({
  dialect,
});

async function seed() {
  try {
    console.log('🌱 Starting database seeding...');

    // Hash password for admin user
    const hashedPassword = await bcrypt.hash('adminfirst', 12);

    // Create admin user
    const adminUser = await db
      .insertInto('users')
      .values({
        email: 'admin@medicine.com',
        password: hashedPassword,
        first_name: 'Admin',
        last_name: 'User',
        role: 'admin',
        phone: '+1234567890',
        address: '123 Admin Street, City, Country'
      })
      .returning('id')
      .executeTakeFirst();

    console.log('✅ Admin user created');

    // Create categories
    const categories = await db
      .insertInto('categories')
      .values([
        {
          name: 'Pain Relief',
          description: 'Medications for pain management'
        },
        {
          name: 'Antibiotics',
          description: 'Medications to treat bacterial infections'
        },
        {
          name: 'Vitamins',
          description: 'Nutritional supplements and vitamins'
        },
        {
          name: 'First Aid',
          description: 'First aid supplies and bandages'
        },
        {
          name: 'Prescription Drugs',
          description: 'Prescription medications'
        }
      ])
      .returning('id')
      .execute();

    console.log('✅ Categories created');

    // Create products
    const products = await db
      .insertInto('products')
      .values([
        {
          name: 'Paracetamol 500mg',
          description: 'Effective pain relief and fever reduction',
          price: 5.99,
          stock_quantity: 100,
          category_id: categories[0].id,
          image_url: 'https://example.com/paracetamol.jpg',
          is_active: true
        },
        {
          name: 'Ibuprofen 400mg',
          description: 'Anti-inflammatory pain relief',
          price: 7.99,
          stock_quantity: 75,
          category_id: categories[0].id,
          image_url: 'https://example.com/ibuprofen.jpg',
          is_active: true
        },
        {
          name: 'Vitamin C 1000mg',
          description: 'Immune system support and antioxidant',
          price: 12.99,
          stock_quantity: 50,
          category_id: categories[2].id,
          image_url: 'https://example.com/vitamin-c.jpg',
          is_active: true
        },
        {
          name: 'Band-Aid Pack',
          description: 'Adhesive bandages for minor cuts',
          price: 3.99,
          stock_quantity: 200,
          category_id: categories[3].id,
          image_url: 'https://example.com/bandaid.jpg',
          is_active: true
        },
        {
          name: 'Antibiotic Cream',
          description: 'Topical antibiotic for minor wounds',
          price: 8.99,
          stock_quantity: 60,
          category_id: categories[1].id,
          image_url: 'https://example.com/antibiotic-cream.jpg',
          is_active: true
        }
      ])
      .returning('id')
      .execute();

    console.log('✅ Products created');

    // Create a regular user
    const regularUserPassword = await bcrypt.hash('user', 12);
    const regularUser = await db
      .insertInto('users')
      .values({
        email: 'user@example.com',
        password: regularUserPassword,
        first_name: 'John',
        last_name: 'Doe',
        role: 'user',
        phone: '+1987654321',
        address: '456 User Avenue, City, Country'
      })
      .returning('id')
      .executeTakeFirst();

    console.log('✅ Regular user created');

    // Create a sample order
    const order = await db
      .insertInto('orders')
      .values({
        user_id: regularUser!.id,
        status: 'pending',
        total_amount: 18.97,
        shipping_address: '456 User Avenue, City, Country',
        payment_status: 'pending'
      })
      .returning('id')
      .executeTakeFirst();

    // Create order items
    await db
      .insertInto('order_items')
      .values([
        {
          order_id: order!.id,
          product_id: products[0].id,
          quantity: 2,
          price: 5.99
        },
        {
          order_id: order!.id,
          product_id: products[3].id,
          quantity: 1,
          price: 3.99
        }
      ])
      .execute();

    console.log('✅ Sample order created');

    console.log('🎉 Database seeding completed successfully!');
    console.log('\n📋 Sample Data:');
    console.log('- Admin: admin@medicine.com / admin123');
    console.log('- User: user@example.com / user123');
    console.log('- 5 Categories created');
    console.log('- 5 Products created');
    console.log('- 1 Sample order created');

  } catch (error) {
    console.error('❌ Seeding failed:', error);
    throw error;
  } finally {
    await db.destroy();
  }
}

seed().catch(console.error); 