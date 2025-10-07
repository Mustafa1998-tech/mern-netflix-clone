# 🎬 MERN Netflix Clone

A full-stack Netflix clone built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Tailwind CSS. This application replicates core Netflix features including user authentication, movie browsing, and video playback.

![Demo App](/frontend/public/screenshot-for-readme.png)

## ✨ Features

- 🎥 Browse movies and TV shows
- 🔐 User authentication (Signup/Login/Logout)
- 🔍 Search functionality
- 🎬 Watch trailers
- 📱 Responsive design for all devices
- ⚡ Fast and optimized performance
- 🎨 Modern UI with Tailwind CSS

## 🚀 Tech Stack

- **Frontend**: React.js, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **State Management**: React Context API
- **Video Playback**: React Player

## 🛠️ Prerequisites

- Node.js (v16 or later)
- npm or yarn
- MongoDB Atlas account or local MongoDB instance
- TMDB API key (for movie data)

## 🏗️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd mern-netflix-clone-master
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   npm install
   
   # Install frontend dependencies
   cd frontend
   npm install
   cd ..
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   TMDB_API_KEY=your_tmdb_api_key
   NODE_ENV=development
   ```

4. **Start the development servers**
   ```bash
   # Start backend server
   npm run dev
   
   # In a new terminal, start frontend server
   cd frontend
   npm run dev
   ```

5. **Open the app**
   The application will be available at `http://localhost:5175`

## 📂 Project Structure

```
mern-netflix-clone/
├── backend/           # Backend server code
│   ├── config/       # Configuration files
│   ├── controllers/  # Route controllers
│   ├── middleware/   # Custom middleware
│   ├── models/       # Database models
│   ├── routes/       # API routes
│   └── server.js     # Main server file
├── frontend/         # Frontend React application
│   ├── public/       # Static files
│   └── src/          # Source code
│       ├── assets/   # Images, fonts, etc.
│       ├── components/ # Reusable UI components
│       ├── context/  # React context providers
│       ├── pages/    # Page components
│       └── App.jsx   # Main App component
├── .env              # Environment variables
└── package.json      # Project dependencies
```

## 🌐 API Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/movies` - Get all movies
- `GET /api/movies/:id` - Get movie details
- `GET /api/search?q=query` - Search movies and TV shows

## 🔧 Built With

- [React](https://reactjs.org/) - Frontend library
- [Vite](https://vitejs.dev/) - Frontend build tool
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express](https://expressjs.com/) - Web framework for Node.js
- [MongoDB](https://www.mongodb.com/) - NoSQL database
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling
- [JWT](https://jwt.io/) - JSON Web Tokens for authentication

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for the movie data
- All the amazing open-source libraries used in this project
