# 🛍️ Zavisoft — Modern E-Commerce Web Application

<img width="1722" height="4216" alt="screencapture-localhost-3000-2026-02-22-05_24_10" src="https://github.com/user-attachments/assets/c80f25ae-6dd8-4f92-a8ec-72601cd8a240" />

## 📖 Overview
Zavisoft is a fully responsive, modern e-commerce web application built with Next.js 16 (App Router) and TypeScript. It provides a clean and intuitive shopping experience — from browsing products to managing a cart — with smooth page transitions, dynamic data fetching, and a polished UI.

## performance

<img width="972" height="891" alt="Screenshot 2026-02-22 051141" src="https://github.com/user-attachments/assets/d0362965-ac3d-4c99-85f8-a16afefcb3db" />

## ✨ Features

🏠 Home Page — Hero section, featured products, promotional banners
🛒 Product Listing — Browse all products with category filtering
📦 Product Detail Page — Full product info with image gallery
🔗 Related Products — Horizontally scrollable related product carousel on product & cart pages
🛍️ Cart Page — Add, remove, and manage cart items
⏳ Page Transition Loader — Smooth loading screen between route changes
📱 Fully Responsive — Optimized for mobile, tablet, and desktop
🔔 Promo Banner — Site-wide promotional announcement bar

## folder structure
```
📦app
 ┣ 📂cart
 ┃ ┗ 📜page.tsx
 ┣ 📂category
 ┃ ┗ 📂[slug]
 ┃ ┃ ┗ 📜page.tsx
 ┣ 📂product
 ┃ ┗ 📂[id]
 ┃ ┃ ┗ 📜page.tsx
 ┣ 📜favicon.ico
 ┣ 📜globals.css
 ┣ 📜layout.tsx
 ┣ 📜page.tsx
 ┗ 📜ReduxProvider.tsx
```

## 🛠️ Tech Stack

```
Technology                     Purpose
Next.js 16                     React framework with App Router
TypeScript                     Type-safe development
Tailwind CSS                   Utility-first styling
Axios                          HTTP client for API requests
React Icons                    Icon library (MdKeyboardArrow, etc.)
Vercel                         Deployment & hosting
```

## Installation

```
# Clone the repository
https://github.com/NaimurRahmanNishat/zavisoft.git

# Navigate into the project
cd zavisoft

# Install dependencies
npm install
```

## Development
```
npm run dev
```

Open http://localhost:3000 in your browser.

## Build for Production

```
npm run build
npm start
```

### 🌐 Deployment

Frontend: Vercel

Backend: Docker + Nginx

Database: MongoDB Atlas

Cache: Redis


### 🤝 Contributing

Follow modular architecture guidelines

Write clean, readable, and documented code

Ensure role-based security

Test all features before submitting a Pull Request


### 📜 License

MIT License © Civic Issue Management System


### 🌟 CIMS

A Digital Platform for Transparent Citizen Issue Reporting & Resolution
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# zavisoft
