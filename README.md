# 👨‍🍳 ChefKart: Full-Stack Chef Management Platform

ChefKart is a production-grade **MERN** application designed to bridge the gap between professional chefs and households. The platform features a robust **MVC architecture**, secure **JWT authentication**, and cloud-integrated media management via **Cloudinary**.

Live Demo LInk--https://chefkart-fullstack-02.onrender.com/

## 🚀 Key Features

* **Chef Discovery:** Advanced filtering by city, cuisine, and dietary preferences (Veg/Non-Veg).
* **Booking System:** Real-time scheduling with availability management.
* **Admin Dashboard:** Full CRUD capabilities for Blogs, Food Galleries, and Testimonials.
* **Lead Management:** Integrated Investor and Customer contact modules.
* **Responsive UI:** Optimized with **Tailwind CSS** and **Framer Motion** for smooth animations.

---

## 🏗️ Project Architecture

The project follows a strict **Model-View-Controller (MVC)** pattern to ensure scalability and clean separation of concerns.

### Tech Stack

* **Frontend:** React.js, Tailwind CSS, Framer Motion, Axios.
* **Backend:** Node.js, Express.js (ES Modules).
* **Database:** MongoDB with Mongoose ODM.
* **Security:** JWT, Helmet, BcryptJS, Express-Rate-Limit.
* **Storage:** Cloudinary API for high-performance image hosting.

---

## 📂 Project Structure

```bash
chefkart-root/
├── backend/
│   ├── config/             # DB and Cloudinary configurations
│   ├── controllers/        # Business logic for all 19+ models
│   ├── middleware/         # Auth guards, Multer, and Error handling
│   ├── models/             # Mongoose schemas with indexing
│   ├── routes/             # RESTful API endpoints
│   └── app.js              # Server entry point with security middleware
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Main view components
│   │   └── services/       # API calling logic (Axios)
│   └── public/
└── .env                    # Environment variables

```

---

## 🛠️ Installation & Setup

### 1. Prerequisites

* Node.js (v18+)
* MongoDB Atlas Account
* Cloudinary Account

### 2. Backend Setup

```bash
cd backend
npm install

```

Create a `.env` file in the backend root:

```env
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
NODE_ENV=development

```

`npm start`

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev

```

---

## 🛡️ Security Implementation (Industry Standards)

As a senior-level project, we have implemented several security layers:

* **Rate Limiting:** Prevents Brute Force attacks on the `/api` routes.
* **XSS Protection:** Sanitizes user input to prevent cross-site scripting.
* **HPP:** Prevents HTTP Parameter Pollution.
* **Helmet:** Secures Express apps by setting various HTTP headers.
* **JWT Protection:** Private routes (like Chef creation/deletion) require a valid Bearer token.

---

## 🛣️ API Documentation (v1)

| Method | Endpoint | Description | Access |
| --- | --- | --- | --- |
| POST | `/api/v1/users/signup` | User Registration | Public |
| POST | `/api/v1/users/login` | User Login & Token | Public |
| GET | `/api/v1/chefs/all` | Fetch all chefs | Public |
| POST | `/api/v1/bookings/create` | Create a booking | Private |
| POST | `/api/v1/blogs/create` | Upload blog with image | Private (Admin) |

---

## 📈 Future Roadmap

* [ ] Integration of a Payment Gateway (Stripe/Razorpay).
* [ ] Real-time Chat between Users and Chefs using Socket.io.
* [ ] AI-based Chef Recommendations based on user history.

## 👥 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

