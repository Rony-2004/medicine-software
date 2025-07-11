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
    const adminPassword = await bcrypt.hash('admin1234', 12);
    // Create admin user
    await db
      .insertInto('users')
      .values({
        email: 'admin@gmail.com',
        password: adminPassword,
        first_name: 'Admin',
        last_name: 'User',
        role: 'admin',
        phone: '+1234567890',
        address: '123 Admin Street, City, Country'
      } as any)
      .executeTakeFirst();
    console.log('✅ Admin user created: admin@gmail.com / admin1234');

    // Hash password for regular user
    const userPassword = await bcrypt.hash('user123', 12);
    // Create regular user
    await db
      .insertInto('users')
      .values({
        email: 'user@example.com',
        password: userPassword,
        first_name: 'John',
        last_name: 'Doe',
        role: 'user',
        phone: '+1987654321',
        address: '456 User Avenue, City, Country'
      } as any)
      .executeTakeFirst();
    console.log('✅ Regular user created: user@example.com / user123');

    console.log('🎉 Database seeding completed successfully!');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    throw error;
  } finally {
    await db.destroy();
  }
}

seed().catch(console.error); 