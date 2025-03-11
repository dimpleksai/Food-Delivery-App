# FoodExpress - MERN Stack Food Delivery Application

## Overview
FoodExpress is a comprehensive food delivery platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This application enables users to browse restaurants, order food items, and make secure payments, while providing restaurant owners with tools to manage their menu and track orders.
Features
User Features

## User Authentication: Secure signup and login functionality using JWT
Restaurant & Menu Browsing: Intuitive interface to explore restaurants and their offerings
Shopping Cart: Add, remove, and modify items before checkout
Order Tracking: Real-time updates on order status
Payment Processing: Secure checkout with Stripe integration
Order History: View past orders and reorder functionality

## Admin Features

Admin Dashboard: Comprehensive control panel for restaurant owners
Menu Management: Add, edit, and remove food items
Order Management: View and update order statuses
Sales Analytics: Track sales performance and popular items
Inventory Control: Manage food item availability

---

## Tech Stack
### Frontend

React.js: Component-based UI development
Redux: State management
React Router: Navigation and routing
Axios: API requests
Stripe.js: Payment processing
CSS/SCSS: Styling and responsive design

### Backend

Node.js: JavaScript runtime
Express.js: Web application framework
MongoDB: NoSQL database
Mongoose: MongoDB object modeling
JWT: Authentication and authorization
Bcrypt: Password hashing

### DevOps & Tools

Git: Version control
npm: Package management
ESLint: Code quality
Jest/React Testing Library: Testing

---

## API Documentation

### Authentication Endpoints

POST /auth/register - Register new user
POST /auth/login - User login

### Food Items Endpoints

POST /api/food/add → Add a new food item (Admin only)
GET /api/food/list → List all food items
POST /api/food/remove → Remove a food item (Admin only)


### Order Endpoints

POST /api/order/place → Place a new order
POST /api/order/verify → Verify order payment
POST /api/order/orders → Get all orders for a user
GET /api/order/list → List all orders (Admin only)
POST /api/order/status → Update order status (Admin only)

### Cart Endpoints

POST /api/cart/add → Add an item to the cart
POST /api/cart/remove → Remove an item from the cart
POST /api/cart/get → Get all items in the cart

## Screenshots

## Acknowledgements

Stripe for payment processing
MongoDB Atlas for database hosting
React Icons for UI icons
