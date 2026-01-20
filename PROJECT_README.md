# Kem Đi - Gelato Website

A Vietnamese artisanal gelato brand website built with React, Vite, and Tailwind CSS.

## 📖 Project Overview

Kem Đi is a digital art gallery and storytelling hub for a Vietnamese gelato brand that focuses on:
- **Brand Equity**: Transparent storytelling about Vietnamese agricultural sourcing and artisan gelato crafting
- **O2O Experience**: Online interaction to drive foot traffic to physical stores
- **Digital Menu**: Visual showcase of 16 gelato flavors and artistic presentations

## 🎨 Features

### 5 Main Pages

1. **Homepage** (`/`)
   - Brand introduction
   - Hero section with call-to-actions
   - Feature highlights (16 flavors, art, sourcing)

2. **Digital Menu** (`/menu`)
   - Display of 16 unique gelato flavors
   - Category filtering (Classic, Seasonal, Premium)
   - Vietnamese agricultural sourcing information

3. **Storytelling Hub** (`/story`)
   - Impact Sourcing narrative
   - Italian gelato crafting process
   - Brand mission and values

4. **The Gelato Artist** (`/artist`)
   - Interactive letter design tool
   - Mass customization feature
   - Create custom gelato word art (up to 10 characters)
   - Flavor selection for each character

5. **Store Locator / Contact** (`/contact`)
   - Store locations and information
   - Delivery app integration (ShopeeFood, GrabFood, Baemin)
   - FAQ section
   - Social media links

## 🛠 Tech Stack

- **React 19.2.0** - UI Framework
- **Vite 7.2.4** - Build tool
- **React Router DOM** - Client-side routing
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **@vitejs/plugin-react-swc** - Fast React refresh

## 📁 Project Structure

```
kemdi/
├── public/
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation component
│   │   └── Footer.jsx      # Footer component
│   ├── pages/
│   │   ├── Home.jsx        # Homepage
│   │   ├── Menu.jsx        # Digital Menu
│   │   ├── Story.jsx       # Storytelling Hub
│   │   ├── Artist.jsx      # Interactive Gelato Artist
│   │   └── Contact.jsx     # Store Locator & Contact
│   ├── App.jsx             # Main app with routing
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles (Tailwind)
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd kemdi
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🍨 Gelato Flavors

The menu features 16 unique flavors sourced from Vietnamese farms:

**Seasonal Flavors:**
- Sầu Riêng Cát Chu (Durian)
- Xoài Cát Hòa Lộc (Mango)
- Dâu Tây Đà Lạt (Strawberry)
- Thanh Long Ruột Đỏ (Dragon Fruit)
- Nhãn Lồng Hưng Yên (Longan)
- Vải Thiều Bắc Giang (Lychee)
- Dưa Hấu Dứa (Yellow Watermelon)

**Classic Flavors:**
- Dừa Bến Tre (Coconut)
- Cà Phê Buôn Ma Thuột (Coffee)
- Bơ Đắk Lắk (Avocado)
- Cam Vinh (Orange)
- Sữa Tươi Nông Trại Đà Lạt (Fresh Milk)

**Premium Flavors:**
- Sữa Dê Núi Mộc Châu (Goat Milk)
- Chocolate Bến Tre (Cacao)
- Matcha Lâm Đồng (Matcha)
- Mật Ong Rừng U Minh (Forest Honey)

## 🎯 Design Philosophy

- **Colorful & Playful**: Gradient backgrounds and vibrant colors representing gelato
- **Responsive**: Mobile-first design approach
- **Interactive**: Engaging user experiences (Artist tool, hover effects)
- **Storytelling**: Content-rich pages that communicate brand values

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is proprietary and confidential.

## 🤝 Contributing

This is a private project. For inquiries, please contact the development team.

---

Made with ❤️ for Kem Đi - Vietnamese Artisanal Gelato
