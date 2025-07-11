💊 MedicinePlace — Full‑fledged Medicine Booking & Delivery App




Modern full‑stack e-commerce platform for booking, approving, and delivering medicines.
Built with Node.js, Express, Next.js, Kysely, and Cloudinary.

📌 About the Project
MedicinePlace is a complete end-to-end system for:

🧾 Browsing and ordering medicines

🔒 Secure user login & JWT authentication

✅ Admin approval flow for placed orders

🚚 Delivery tracking until the order reaches the customer

📦 Cloud storage for product images

💳 Payment (planned / optional integration)

Ideal as a freelance medicine delivery app, a portfolio project, or a real e-commerce product foundation.

🛠 Tech Stack
Layer	Technology
Frontend	Next.js, React, Tailwind CSS
Backend	Node.js, Express
Database	PostgreSQL with Kysely + kysely-codegen
Auth	JWT
Media	Cloudinary

🌟 Key Features
✅ Fully responsive website for browsing & booking medicines
✅ Place an order → admin approves → order processed → delivered to customer
✅ Cloudinary image upload
✅ JWT-protected admin & user routes
✅ Kysely query builder with auto‑generated types
✅ Delivery tracking (status updates like Pending → Approved → Out for Delivery → Delivered)

🧩 System Flow Diagram
mermaid
Copy
Edit
graph TD
    U[User] -->|Login/Register| F[Frontend]
    F -->|Place Order| B[Backend API]
    B -->|Save Order| DB[(Database)]
    A[Admin] -->|Login| F
    F -->|Admin Approves Order| B
    B -->|Update Status| DB
    F -->|Track Order Status| B
    B -->|Fetch Data| DB
    B -->|Upload Images| C[Cloudinary]
    F -->|View Medicines| B
    B -->|Fetch Products| DB
🚀 Getting Started
1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/yourusername/medicineplace.git
cd medicineplace
2️⃣ Backend Setup
bash
Copy
Edit
cd backend
npm install
Create .env:

env
Copy
Edit
PORT=5000
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
DATABASE_URL=your_postgres_url
Generate Kysely types:

bash
Copy
Edit
npm run db:generate
Run migrations & seed data:

bash
Copy
Edit
npm run migrate
npm run seed
Start backend:

bash
Copy
Edit
npm run dev
3️⃣ Frontend Setup
bash
Copy
Edit
cd ../frontend
npm install
Create .env.local:

env
Copy
Edit
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
Start frontend:

bash
Copy
Edit
npm run dev
App runs at: http://localhost:3000

📸 Image Uploads
Product images upload to Cloudinary automatically.

Set your Cloudinary credentials in backend .env.

📦 Database Tool
Using Kysely + kysely-codegen:

Type-safe queries

Auto‑generated DB types

Easy migration and maintenance

🛡 Authentication
JWT-based login

Token in Authorization header

Frontend handles login & token storage

🐞 Troubleshooting
Product upload fails? → check Cloudinary .env

CORS errors? → check NEXT_PUBLIC_API_BASE_URL

🧰 Scripts Reference
Command	Location	Description
npm run dev	backend	Start backend in dev mode
npm run migrate	backend	Run DB migrations
npm run seed	backend	Seed admin & test users
npm run db:generate	backend	Generate Kysely DB types
npm run dev	frontend	Start frontend in dev mode


📣 Contact
Have questions or ideas?
Open an issue or discuss in GitHub.
