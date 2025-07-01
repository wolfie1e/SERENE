# SERENE
SERENE 
🧴 SERENE – Full Stack Haircare E-Commerce Platform

SERENE is a modern full-stack e-commerce application built for selling haircare products. It offers seamless product browsing, secure authentication, real-time order tracking, admin controls, Stripe integration, and a beautiful responsive UI.

Use this to login as an admin:
ADMIN_EMAIL=admin@serene.com

ADMIN_PASSWORD=secure123


🌐 Live URLs

- 🛍️ **User Frontend**: [https://sereneuser.onrender.com](https://sereneuser.onrender.com)
- 🔐 **Admin Frontend**: [https://sereneadmin.onrender.com](https://sereneadmin.onrender.com)
- ⚙️ **Backend API**: [https://serenebackend.onrender.com](https://serenebackend.onrender.com)

🚀 Features
👩‍💼 User Interface (React + CSS)
- View and filter products by category
- Add to cart, increase/decrease quantity
- Checkout via Stripe
- Order tracking with status (Packaging → Delivery → Delivered)
- My Orders page with cancel option before shipping
- Toast notifications for actions
- Confetti animation on successful payment
- Search bar to filter products

🔐 Authentication
- JWT-based login/signup for users
- Secure Admin login with .env credentials

🛠️ Admin Dashboard
- View all orders with status and customer info
- Update order status (Dropdown)
- Delete products
- Toggle availability (In Stock / Out of Stock)
- Search and filter products
- Add new products

📦 Backend (Express + MongoDB)
- REST API for products, cart, orders, user auth
- Protected routes with token-based middleware
- Stripe payment gateway integration
- Environment-safe config for keys


