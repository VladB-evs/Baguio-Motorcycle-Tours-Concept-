# Baguio Motorcycle Tours

A full-stack web application for booking motorcycle tours in Baguio City, Philippines. The application features a modern, responsive UI for browsing available tours and making bookings.

## Project Overview

This project consists of a React-based frontend and a Node.js backend, utilizing modern web technologies to provide a seamless user experience for booking motorcycle tours.

### Key Features

- Interactive tour browsing
- Responsive design for all devices
- Modern UI with smooth animations
- Booking management system

## Tech Stack

### Frontend
- React with TypeScript
- Vite (Build tool)
- TailwindCSS (Styling)
- Lucide React (Icons)
- Shadcn/ui (UI Components)

### Backend
- Node.js
- Express
- Drizzle ORM
- TypeScript

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/VladB-evs/Baguio-Motorcycle-Tours-Concept-.git
cd VladB-evs-Baguio-Motorcycle-Tours
```

2. Install dependencies:
```bash
npm install
```

3. Start the development servers:

For the client:
```bash
cd client
npm run dev
```

For the server (Server is NOT setup): 
```bash
cd server
npm run dev
```

## Development

### Client
The client application is built with React and TypeScript, utilizing Vite for fast development and building. The UI is styled using TailwindCSS and enhanced with shadcn/ui components.

The client code is organized as follows:
- `/src/components`: Reusable UI components
- `/src/pages`: Page components and routing
- `/src/hooks`: Custom React hooks
- `/src/lib`: Utility functions and configurations

### Server
The backend server is built with Node.js and Express, using TypeScript for type safety. Data persistence is handled through Drizzle ORM.

Server code structure:
- `index.ts`: Main server entry point
- `routes.ts`: API route definitions
- `storage.ts`: Database configurations
- `vite.ts`: Development server setup

## Building for Production

To build the application for production:

1. Build the client:
```bash
cd client
npm run build
```

2. Build the server:
```bash
cd server
npm run build
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
