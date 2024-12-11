EdgeTrack/
├── backend/                     # Backend folder for Express.js and Prisma
│   ├── prisma/                  # Prisma configuration and schema
│   │   ├── schema.prisma        # Prisma schema definition
│   │   └── migrations/          # Auto-generated migration files
│   ├── src/                     # Backend source code
│   │   ├── routes/              # API route handlers
│   │   │   ├── devices.ts       # Routes related to device management
│   │   │   └── index.ts         # Main API router
│   │   ├── controllers/         # Business logic for API endpoints
│   │   │   ├── devicesController.ts # Logic for device discovery/blocking
│   │   ├── models/              # Prisma models and utility functions
│   │   │   └── prismaClient.ts  # Prisma client instance
│   │   ├── middlewares/         # Middleware for validation/authentication
│   │   │   ├── authMiddleware.ts# Example middleware for authentication
│   │   │   └── errorHandler.ts  # Global error handler
│   │   ├── utils/               # Helper functions
│   │   │   ├── networkUtils.ts  # ARP, Nmap, and networking helpers
│   │   │   └── scheduleUtils.ts # Helpers for task scheduling
│   │   ├── services/            # Service layer for interaction with database
│   │   │   ├── deviceService.ts # Database queries for device management
│   │   └── app.ts               # Main application setup (Express instance)
│   │   └── server.ts            # Server entry point
│   ├── .env                     # Environment variables for backend
│   ├── tsconfig.json            # TypeScript configuration for backend
│   ├── package.json             # Backend dependencies
│   └── node_modules/            # Backend modules
├── frontend/                    # Frontend folder for React.js
│   ├── public/                  # Public assets
│   ├── src/                     # Frontend source code
│   │   ├── components/          # Reusable components
│   │   │   ├── DeviceCard.tsx   # Component for displaying a device
│   │   │   └── Navbar.tsx       # Navigation bar component
│   │   ├── pages/               # Page-specific components
│   │   │   ├── Dashboard.tsx    # Main dashboard page
│   │   │   └── Login.tsx        # Login page
│   │   ├── services/            # API service functions
│   │   │   ├── deviceAPI.ts     # Fetch and manage devices via backend
│   │   ├── styles/              # Stylesheets or Tailwind configuration
│   │   └── App.tsx              # Main React entry point
│   │   └── index.tsx            # ReactDOM render entry
│   ├── tailwind.config.js       # Tailwind CSS configuration (if used)
│   ├── tsconfig.json            # TypeScript configuration for frontend
│   ├── package.json             # Frontend dependencies
│   └── node_modules/            # Frontend modules
├── package.json                 # Root dependencies (optional, for both apps)
└── README.md                    # Project documentation
