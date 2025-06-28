# Medicine Software Backend

A robust Node.js backend for the Medicine Software application built with Express, TypeScript, Kysely ORM, and PostgreSQL.

## 🚀 Features

- **TypeScript** - Full type safety
- **Express.js** - Fast, unopinionated web framework
- **Kysely ORM** - Type-safe SQL query builder
- **PostgreSQL** - Reliable relational database
- **JWT Authentication** - Secure user authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security headers
- **Morgan** - HTTP request logging
- **Compression** - Response compression
- **File Upload** - Multer integration
- **Validation** - Request validation with express-validator

## 📋 Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database (Neon recommended)
- npm or yarn

## 🛠️ Installation

1. **Clone the repository and navigate to backend:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` file with your configuration:
   ```env
   DATABASE_URL=your_neon_postgresql_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   NODE_ENV=development
   ```

4. **Run database migrations:**
   ```bash
   npm run db:migrate
   ```

5. **Seed the database (optional):**
   ```bash
   npm run db:seed
   ```

6. **Start the development server:**
   ```bash
   npm run dev
   ```

## 📊 Database Schema

### Tables
- **users** - User accounts and authentication
- **categories** - Product categories
- **products** - Medicine and health products
- **orders** - Customer orders
- **order_items** - Individual items in orders
- **cart_items** - Shopping cart items

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run test` - Run tests
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database with sample data
- `npm run db:generate` - Generate Kysely types

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get single order

### Admin
- `GET /api/admin/dashboard` - Admin dashboard stats
- `GET /api/admin/users` - Get all users (admin only)
- `GET /api/admin/orders` - Get all orders (admin only)

## 🔐 Authentication

The API uses JWT tokens for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## 📝 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `NODE_ENV` | Environment | development |
| `DATABASE_URL` | PostgreSQL connection string | - |
| `JWT_SECRET` | JWT signing secret | - |
| `JWT_EXPIRES_IN` | JWT expiration time | 7d |
| `CORS_ORIGIN` | Allowed CORS origin | http://localhost:3000 |

## 🗄️ Database Setup with Neon

1. Create a Neon account at [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string
4. Add it to your `.env` file as `DATABASE_URL`

## 🧪 Testing

```bash
npm run test
```

## 📦 Production Build

```bash
npm run build
npm start
```

## 🔍 Health Check

Visit `http://localhost:5000/health` to check if the server is running.

## 📚 Sample Data

After running the seed script, you'll have:

- **Admin User**: admin@medicine.com / admin123
- **Regular User**: user@example.com / user123
- **5 Product Categories**
- **5 Sample Products**
- **1 Sample Order**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License. 