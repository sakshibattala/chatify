# Chatify

Chatify is a real-time chat application that allows users to communicate seamlessly. It features a modern frontend built with React and Tailwind CSS, and a robust backend powered by Node.js and Express.js. The application also integrates with various third-party services for enhanced functionality.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- Real-time messaging with WebSocket support
- User authentication (Sign Up, Login)
- Chat management (create and list chats)
- User profile management
- Responsive design with Tailwind CSS

## Technologies Used

### Frontend

- React.js
- Vite
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express.js
- WebSocket
- MongoDB (Database)
- Cloudinary (Image Uploads)
- Resend (Email Service)

## Project Structure

```
chatify/
├── backend/
│   ├── src/
│   │   ├── server.js                # Entry point for the backend server
│   │   ├── controllers/             # Contains controller logic for API endpoints
│   │   │   ├── auth.controller.js   # Handles user authentication logic
│   │   │   └── message.controller.js # Handles chat message logic
│   │   ├── emails/                  # Email templates and handlers
│   │   │   ├── emailHandlers.js     # Logic for sending emails
│   │   │   └── emailTemplate.js     # Email templates
│   │   ├── lib/                     # Utility libraries and configurations
│   │   │   ├── arcjet.js
│   │   │   ├── cloudinary.js
│   │   │   ├── db.js                # Database connection setup
│   │   │   ├── env.js               # Environment variable configurations
│   │   │   ├── resend.js
│   │   │   └── socket.js            # WebSocket setup
│   │   ├── middlewares/             # Middleware for request handling
│   │   │   ├── arcject.middleware.js
│   │   │   ├── auth.middleware.js
│   │   │   └── socket.auth.middleware.js
│   │   ├── models/                  # Database models
│   │   │   ├── message.model.js
│   │   │   └── user.model.js
│   │   └── routes/                  # API route definitions
│   │       ├── auth.routes.js
│   │       └── message.routes.js
│   └── package.json                 # Backend dependencies and scripts
├── frontend/
│   ├── public/                      # Static assets
│   │   └── sounds/
│   ├── src/
│   │   ├── App.jsx                  # Main React component
│   │   ├── index.css                # Global styles
│   │   ├── main.jsx                 # Entry point for the React app
│   │   ├── components/              # Reusable React components
│   │   │   ├── ActiveTabSwitch.jsx
│   │   │   ├── BorderAnimatedContainer.jsx
│   │   │   ├── ChatBody.jsx
│   │   │   ├── ChatContainer.jsx
│   │   │   ├── ChatHeader.jsx
│   │   │   ├── ChatsList.jsx
│   │   │   ├── ContactList.jsx
│   │   │   ├── MessageInput.jsx
│   │   │   ├── MessagesLoadingSkeleton.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── NoChatHistoryPlaceholder.jsx
│   │   │   ├── NoChatsFound.jsx
│   │   │   ├── NoConversationPlaceholder.jsx
│   │   │   ├── PageLoader.jsx
│   │   │   ├── ProfileHeader.jsx
│   │   │   └── UsersLoadingSkeleton.jsx
│   │   ├── hooks/                   # Custom React hooks
│   │   │   └── useKeyboardSound.js
│   │   ├── lib/                     # Frontend libraries and utilities
│   │   │   └── axios.js
│   │   ├── pages/                   # Page components
│   │   │   ├── ChatPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   └── SignUpPage.jsx
│   │   └── store/                   # State management
│   │       ├── useAuthStore.jsx
│   │       └── useChatStore.jsx
│   ├── eslint.config.js             # ESLint configuration
│   ├── index.html                   # HTML template
│   ├── package.json                 # Frontend dependencies and scripts
│   ├── postcss.config.js            # PostCSS configuration
│   ├── tailwind.config.js           # Tailwind CSS configuration
│   └── vite.config.js               # Vite configuration
├── .gitignore                       # Files and directories to ignore in Git
├── package.json                     # Root-level package.json for project scripts
└── README.md                        # Project documentation
```

## Setup and Installation

### Prerequisites

- Node.js (v14 or later)
- npm (Node Package Manager)
- MongoDB

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/sakshibattala/chatify.git
   cd chatify
   ```
2. Install dependencies for both backend and frontend:
   ```bash
   npm run build
   ```
3. Set up environment variables:
   - Create a `.env` file in both `backend` and `frontend` directories.
   - Add the required environment variables as specified in the respective `.env` files.
4. Start the backend server:
   ```bash
   npm run start
   ```
5. Start the frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Sign up or log in to start chatting.
3. Explore the chat features, including sending messages, managing chats, and updating your profile.

## API Endpoints

### Authentication

- **POST** `/api/auth/signup` - Register a new user
- **POST** `/api/auth/login` - Log in a user

### Messages

- **GET** `/api/messages/:chatId` - Get messages for a specific chat
- **POST** `/api/messages` - Send a new message

## License

This project is licensed under the ISC License. See the LICENSE file for details.
