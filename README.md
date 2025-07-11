# 🚀 Getting Started: Medicine Software Project

## 1. Clone the Repository
```bash
git clone <your-repo-url>
cd medicine-software
```

---

## 2. Backend Setup

### a. Install Dependencies
```bash
cd backend
npm install
```

### b. Configure Environment Variables
Create a `.env` file in the `backend/` directory with the following (replace with your actual credentials):
```env
PORT=5000
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
DATABASE_URL=your_database_url
```

### c. Run Database Migrations & Seed
```bash
# Run migrations
npm run migrate

# Seed the database (creates admin and user accounts)
npm run seed
```

### d. Start the Backend Server
```bash
npm run dev
```
The backend will run on `http://localhost:5000` by default.

---

## 3. Frontend Setup

### a. Install Dependencies
```bash
cd ../frontend
npm install
```

### b. Configure API Base URL
Create a `.env.local` file in the `frontend/` directory:
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
```

### c. Start the Frontend
```bash
npm run dev
```
The frontend will run on `http://localhost:3000` by default.

---

## 4. Admin & User Accounts

- **Admin:**  
  - Email: `admin@gmail.com`  
  - Password: `admin123`  
  - Only this account can access the admin dashboard and add products.

- **User:**  
  - Email: `user@example.com`  
  - Password: `user123`

---

## 5. Image Uploads

- Product images are uploaded to [Cloudinary](https://cloudinary.com/).  
- Ensure your Cloudinary credentials are set in the backend `.env` file.

---

## 6. Authentication

- All protected backend routes require a JWT token in the `Authorization` header.
- The frontend handles login and token storage automatically.

---

## 7. Troubleshooting

- **500 Errors on Product Add:**  
  - Check Cloudinary credentials in backend `.env`.
  - Ensure backend is restarted after changing `.env`.

- **CORS or 404 Issues:**  
  - Confirm `NEXT_PUBLIC_API_BASE_URL` in frontend `.env.local` matches backend URL.

---

## 8. Scripts Reference

| Command                | Location   | Description                        |
|------------------------|------------|------------------------------------|
| `npm run dev`          | backend    | Start backend in dev mode          |
| `npm run migrate`      | backend    | Run DB migrations                  |
| `npm run seed`         | backend    | Seed DB with admin/user            |
| `npm run dev`          | frontend   | Start frontend in dev mode         |

---

**Enjoy building with your medicine software project!**  
For any issues, check the logs or open an issue in the repository. 