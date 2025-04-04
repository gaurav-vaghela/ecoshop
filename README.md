# EcoShop - Sustainable Shopping Made Simple

EcoShop is a modern e-commerce platform built with React, TypeScript, and Tailwind CSS, focusing on sustainable and eco-friendly products.

## 🌐 Live Demo

Check out the live demo at [ecoshop.gauravvaghela.com](https://ecoshop.gauravvaghela.com)

## 🌟 Features

- 🛍️ Full-featured e-commerce functionality
- 🎨 Beautiful, responsive design with dark mode support
- 🔒 User authentication and profile management
- 🛒 Shopping cart and wishlist
- 📱 Mobile-friendly interface
- 🔍 Advanced product search and filtering
- 💳 Secure checkout process
- 📦 Order tracking system
- 📝 Blog section
- 🌙 Dark mode support

## 🚀 Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React (for icons)
- Context API (for state management)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18.0.0 or higher)
- npm (v8.0.0 or higher)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/gaurav-vaghela/ecoshop.git
cd ecoshop
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add necessary environment variables:
```env
VITE_APP_TITLE=EcoShop
VITE_APP_DESCRIPTION="Sustainable Shopping Made Simple"
```

## 🔧 Development

To start the development server:

```bash
npm run dev
```

This will start the development server at `http://localhost:5173` (or another available port if 5173 is in use).

### Development Features:
- Hot Module Replacement (HMR)
- Error overlay
- TypeScript type checking
- ESLint integration
- Automatic browser reloading

## 🏗️ Building for Production

1. Create a production build:
```bash
npm run build
```

This will:
- Generate optimized assets in the `dist` directory
- Minify JavaScript and CSS
- Generate source maps
- Optimize images
- Create a production-ready bundle

2. Preview the production build locally:
```bash
npm run preview
```

## 📦 Production Deployment

The project is configured for deployment on Netlify. Here's how to deploy:

1. Create a new site on Netlify
2. Connect your repository
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18.x

Environment variables needed for production:
```env
VITE_APP_TITLE=EcoShop
VITE_APP_DESCRIPTION="Sustainable Shopping Made Simple"
```

## 🧪 Project Structure

```
ecoshop/
├── src/
│   ├── components/     # Reusable components
│   ├── context/       # React Context providers
│   ├── pages/         # Page components
│   ├── types/         # TypeScript type definitions
│   ├── data/          # Mock data and constants
│   ├── styles/        # Global styles and Tailwind config
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
├── public/            # Static assets
├── index.html         # HTML template
├── vite.config.ts     # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Project dependencies and scripts
```

## 🔍 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎨 Customization

### Tailwind Configuration
Customize the design system by modifying `tailwind.config.js`:
- Colors
- Typography
- Spacing
- Breakpoints
- Custom utilities

### Theme Configuration
The app supports light and dark modes. Theme settings are managed through:
- ThemeContext (`src/context/ThemeContext.tsx`)
- Tailwind dark mode classes
- Local storage persistence

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev)
- UI inspiration from various sustainable e-commerce platforms