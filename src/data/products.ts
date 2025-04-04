export const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with active noise cancellation, 30-hour battery life, and premium audio drivers for an immersive listening experience. Features touch controls and voice assistant integration.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    category: "Electronics",
    subcategory: "Audio",
    features: [
      "Active Noise Cancellation",
      "30-hour Battery Life",
      "Touch Controls",
      "Voice Assistant Support",
      "Premium Audio Drivers"
    ],
    specs: {
      brand: "AudioTech",
      connectivity: "Bluetooth 5.0",
      weight: "250g",
      warranty: "2 years"
    }
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 299.99,
    description: "Advanced smartwatch with comprehensive health tracking features, including heart rate monitoring, sleep analysis, and workout tracking. Features a bright AMOLED display and 5-day battery life.",
    image: "https://images.unsplash.com/photo-1617043983671-adaadcaa2460?w=800",
    category: "Electronics",
    subcategory: "Wearables",
    features: [
      "Heart Rate Monitoring",
      "Sleep Analysis",
      "5-day Battery Life",
      "AMOLED Display",
      "Water Resistant"
    ],
    specs: {
      brand: "TechFit",
      display: "1.4\" AMOLED",
      waterResistance: "5ATM",
      warranty: "1 year"
    }
  },
  {
    id: 3,
    name: "Leather Laptop Bag",
    price: 79.99,
    description: "Premium handcrafted leather laptop bag with multiple compartments and padded protection. Perfect for laptops up to 15 inches. Features adjustable shoulder strap and water-resistant design.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
    category: "Accessories",
    subcategory: "Bags",
    features: [
      "Genuine Leather",
      "Multiple Compartments",
      "Padded Protection",
      "Adjustable Strap",
      "Water Resistant"
    ],
    specs: {
      material: "Full-grain leather",
      capacity: "15\" laptop",
      dimensions: "16\" x 12\" x 4\"",
      warranty: "Lifetime"
    }
  },
  {
    id: 4,
    name: "Minimalist Desk Lamp",
    price: 49.99,
    description: "Modern LED desk lamp with adjustable brightness and color temperature. Features touch controls and flexible arm for perfect positioning. Energy-efficient and eye-friendly design.",
    image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=800",
    category: "Home",
    subcategory: "Lighting",
    features: [
      "Adjustable Brightness",
      "Color Temperature Control",
      "Touch Controls",
      "Flexible Arm",
      "Energy Efficient"
    ],
    specs: {
      brand: "LightCraft",
      power: "10W LED",
      colorTemp: "2700K-6500K",
      warranty: "2 years"
    }
  },
  {
    id: 5,
    name: "Eco-Friendly Water Bottle",
    price: 24.99,
    description: "Sustainable stainless steel water bottle with double-wall insulation. Keeps drinks cold for 24 hours or hot for 12 hours. Features leak-proof design and wide mouth for easy cleaning.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800",
    category: "Lifestyle",
    subcategory: "Drinkware",
    features: [
      "Double-wall Insulation",
      "24hr Cold / 12hr Hot",
      "Leak-proof Design",
      "Wide Mouth",
      "BPA Free"
    ],
    specs: {
      material: "18/8 Stainless Steel",
      capacity: "750ml",
      weight: "380g",
      warranty: "Lifetime"
    }
  },
  {
    id: 6,
    name: "Organic Cotton Bedding Set",
    price: 129.99,
    description: "Luxurious 100% organic cotton bedding set including duvet cover and pillowcases. GOTS certified, hypoallergenic, and incredibly soft. Perfect for sensitive skin.",
    image: "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=800",
    category: "Home",
    subcategory: "Bedding",
    features: [
      "100% Organic Cotton",
      "GOTS Certified",
      "Hypoallergenic",
      "Extra Soft",
      "Easy Care"
    ],
    specs: {
      material: "Organic Cotton",
      threadCount: "400",
      pieces: "3",
      warranty: "1 year"
    }
  },
  {
    id: 7,
    name: "Smart Plant Monitor",
    price: 39.99,
    description: "Monitor your plants' health with this smart device that tracks soil moisture, sunlight, temperature, and nutrients. Connects to your smartphone for real-time updates and care recommendations.",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800",
    category: "Home",
    subcategory: "Smart Home",
    features: [
      "Soil Moisture Tracking",
      "Sunlight Monitoring",
      "Temperature Sensing",
      "Nutrient Analysis",
      "App Integration"
    ],
    specs: {
      brand: "GreenLife",
      battery: "6 months",
      connectivity: "Bluetooth",
      warranty: "1 year"
    },
    onSale: true,
    salePrice: 29.99
  },
  {
    id: 8,
    name: "Bamboo Cutlery Set",
    price: 34.99,
    description: "Sustainable bamboo cutlery set with carrying case. Perfect for eco-conscious travelers and outdoor enthusiasts. Includes fork, knife, spoon, and chopsticks.",
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=800",
    category: "Lifestyle",
    subcategory: "Kitchen",
    features: [
      "100% Bamboo",
      "Travel Case",
      "Dishwasher Safe",
      "Biodegradable",
      "Lightweight"
    ],
    specs: {
      brand: "EcoWare",
      material: "Bamboo",
      pieces: "4",
      warranty: "1 year"
    }
  },
  {
    id: 9,
    name: "Wireless Charging Pad",
    price: 49.99,
    description: "Fast wireless charging pad with sleek design. Compatible with all Qi-enabled devices. Features LED indicator and foreign object detection for safe charging.",
    image: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800",
    category: "Electronics",
    subcategory: "Accessories",
    features: [
      "15W Fast Charging",
      "Qi Compatible",
      "LED Indicator",
      "Safety Protection",
      "Non-slip Surface"
    ],
    specs: {
      brand: "TechFit",
      input: "QC 3.0",
      output: "15W max",
      warranty: "18 months"
    },
    onSale: true,
    salePrice: 39.99
  },
  {
    id: 10,
    name: "Recycled Notebook Set",
    price: 19.99,
    description: "Set of three notebooks made from 100% recycled paper. Features dot grid pages perfect for bullet journaling and planning. Includes different colors and sizes.",
    image: "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=800",
    category: "Accessories",
    subcategory: "Stationery",
    features: [
      "100% Recycled Paper",
      "Dot Grid Pages",
      "Three Sizes",
      "Sturdy Cover",
      "Lay-flat Design"
    ],
    specs: {
      brand: "EcoWrite",
      pages: "80 per book",
      paper: "120gsm",
      sizes: "A4, A5, A6"
    }
  },
  {
    id: 12,
    name: "Solar Power Bank",
    price: 59.99,
    description: "High-capacity power bank with solar charging capability. Perfect for outdoor adventures and emergency backup. Features multiple USB ports and LED light.",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800",
    category: "Electronics",
    subcategory: "Power",
    features: [
      "Solar Charging",
      "20000mAh Capacity",
      "Dual USB Ports",
      "LED Flashlight",
      "Water Resistant"
    ],
    specs: {
      brand: "TechFit",
      capacity: "20000mAh",
      input: "5V/2A",
      output: "5V/2.4A"
    },
    onSale: true,
    salePrice: 49.99
  },
  {
    id: 13,
    name: "Meditation Cushion Set",
    price: 79.99,
    description: "Ergonomic meditation cushion set made from organic materials. Includes zafu and zabuton for comfortable meditation practice. Features carrying handle.",
    image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=800",
    category: "Lifestyle",
    subcategory: "Wellness",
    features: [
      "Organic Cotton Cover",
      "Buckwheat Fill",
      "Ergonomic Design",
      "Carrying Handle",
      "Machine Washable"
    ],
    specs: {
      brand: "ZenLife",
      material: "Organic Cotton",
      fill: "Buckwheat Hulls",
      dimensions: "16\" x 16\" x 6\""
    }
  },
  {
    id: 16,
    name: "Bamboo Bathroom Set",
    price: 44.99,
    description: "Complete bathroom accessory set made from sustainable bamboo. Includes toothbrush holder, soap dispenser, and storage containers. Water-resistant finish.",
    image: "https://images.unsplash.com/photo-1600423115367-87ea7661688f?w=800",
    category: "Home",
    subcategory: "Bathroom",
    features: [
      "Sustainable Bamboo",
      "Water Resistant",
      "4-Piece Set",
      "Non-slip Base",
      "Easy Clean"
    ],
    specs: {
      brand: "EcoWare",
      material: "Bamboo",
      pieces: "4",
      finish: "Natural Oil"
    }
  }
];