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

    // Hash password for owner user
    const ownerPassword = await bcrypt.hash('ownerfirst', 12);
    // Create owner user
    await db
      .insertInto('users')
      .values({
        email: 'owner@medicine.com',
        password: ownerPassword,
        first_name: 'Owner',
        last_name: 'User',
        role: 'owner',
        phone: '+1234567890',
        address: '123 Owner Street, City, Country'
      } as any)
      .executeTakeFirst();
    console.log('✅ Owner user created: owner@medicine.com / ownerfirst');

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