# 🌿 e-plantShopping

A beautifully designed **React** front-end shopping application for browsing and purchasing premium indoor houseplants. Built as a fully functional SPA (Single Page Application) with a shopping cart powered by Redux Toolkit.

## Overview

e-plantShopping lets customers browse a curated catalogue of houseplants, add items to a shopping cart, and manage their order before checkout — all within a sleek, dark-green themed interface.

## Features

- **Landing Page** — Full-screen hero with background image, company name, tagline, and a "Get Started" CTA button.
- **Product Listing Page** — 9 houseplants organised across 3 categories (Tropical Statement Plants, Effortless Low-Maintenance, Succulents & Cacti). Each card shows a thumbnail, plant name, price, and an Add to Cart button.
- **Shopping Cart Page** — Displays all cart items with thumbnails, unit prices, and subtotals. Supports:
  - **Increase / Decrease** quantity per item
  - **Delete** individual items
  - **Dynamic cart badge** in the header showing total item count
  - **Order Summary** sidebar with running total and Checkout button

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 + Vite | UI framework & fast dev server |
| Redux Toolkit | Global cart state management |
| React Router DOM | Client-side routing (3 pages) |
| Vanilla CSS | Premium styling — glassmorphism, animations, responsive grid |

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx / Header.css   # Sticky header with cart badge
│   └── PlantCard.jsx / PlantCard.css  # Individual plant card
├── pages/
│   ├── LandingPage.jsx / .css    # Hero landing page
│   ├── ProductPage.jsx / .css    # Product listing by category
│   └── CartPage.jsx / .css       # Shopping cart & order summary
├── store/
│   ├── store.js                  # Redux store configuration
│   └── cartSlice.js              # Cart actions & reducer
├── data/
│   └── plants.js                 # Plant catalogue (9 plants, 3 categories)
└── index.css                     # Global styles & design tokens
```

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
