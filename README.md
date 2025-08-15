#GupShup...
# 💬 Realtime Chat Application 🚀

This project is a full-stack real-time chat application that allows users to communicate with each other instantly. It features user authentication, profile management, and real-time messaging using WebSockets. The application provides a seamless and engaging user experience for staying connected with friends, family, or colleagues.

## ✨ Key Features

- **Real-time Messaging:** Send and receive messages instantly using Socket.IO. ✉️
- **User Authentication:** Secure signup, login, and logout functionality. 🔒
- **Profile Management:** Update user profile information, including avatar and username. 👤
- **Online Status:** See which users are currently online. 🟢
- **Responsive Design:** Works seamlessly on various devices. 📱💻
- **Theme Support:** Supports light and dark themes. ☀️🌙
- **Toast Notifications:** Displays user-friendly notifications for various events. 🍞

## 🛠️ Tech Stack

- **Frontend:**
    - React: JavaScript library for building user interfaces.
    - React Router DOM: For handling client-side routing.
    - Zustand: State management library.
    - Axios: HTTP client for making API requests.
    - Socket.IO Client: For real-time communication with the backend.
    - react-hot-toast: For displaying toast notifications.
    - lucide-react: For icons.
    - Vite: Build tool.
    - JavaScript (ES6+): Programming language.
    - CSS: Styling.
- **Backend:**
    - Node.js: JavaScript runtime environment.
    - Express: Web framework for building the API.
    - Socket.IO: For real-time communication.
    - Mongoose: MongoDB object modeling tool.
    - JSON Web Tokens (JWT): For authentication.
    - bcrypt: For password hashing.
    - cookie-parser: For parsing cookies.
    - cors: For enabling Cross-Origin Resource Sharing.
    - dotenv: For loading environment variables.
- **Database:**
    - MongoDB: NoSQL database.

## 📦 Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (>=18) installed
- MongoDB installed and running
- npm or yarn package manager

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2.  **Install backend dependencies:**

    ```bash
    cd backend
    npm install # or yarn install
    ```

3.  **Install frontend dependencies:**

    ```bash
    cd ../frontend
    npm install # or yarn install
    ```

4.  **Configure environment variables:**

    - Create a `.env` file in both the `backend` and `frontend` directories.
    - Add the following variables to the `backend/.env` file:

    ```
    PORT=5001
    MONGODB_URI=<your-mongodb-connection-string>
    JWT_SECRET=<your-jwt-secret>
    ```

    - Add the following variable to the `frontend/.env` file:

    ```
    VITE_BACKEND_URL=http://localhost:3000/api # or your deployed backend URL
    ```

### Running Locally

1.  **Start the backend server:**

    ```bash
    cd backend
    npm run dev # or yarn dev
    ```

2.  **Start the frontend development server:**

    ```bash
    cd ../frontend
    npm run dev # or yarn dev
    ```

    The frontend application will be accessible at `http://localhost:5173`.

## 📂 Project Structure

```
📂 Realtime-Chat-App
├── 📁 backend
│   ├── 📁 src
│   │   ├── 📁 controllers
│   │   │   ├── auth.controller.js
│   │   │   ├── message.controller.js
│   │   ├── 📁 middleware
│   │   │   ├── auth.middleware.js
│   │   ├── 📁 models
│   │   │   ├── message.model.js
│   │   │   ├── user.model.js
│   │   ├── 📁 routes
│   │   │   ├── auth.route.js
│   │   │   ├── message.route.js
│   │   ├── 📁 lib
│   │   │   ├── db.js
│   │   │   ├── socket.js
│   │   ├── index.js
│   ├── package.json
│   └── ...
├── 📁 frontend
│   ├── 📁 src
│   │   ├── 📁 components
│   │   │   ├── ChatContainer.jsx
│   │   │   ├── NoChatSelected.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   ├── 📁 pages
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── ProfilePage.jsx
│   │   │   ├── SettingsPage.jsx
│   │   │   ├── SignUpPage.jsx
│   │   ├── 📁 store
│   │   │   ├── useAuthStore.js
│   │   │   ├── useChatStore.js
│   │   ├── 📁 lib
│   │   │   ├── axios.js
│   │   │   ├── utils.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   ├── vite.config.js
│   ├── package.json
│   └── ...
├── README.md
└── ...
```

## 📸 Screenshots



## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## 📝 License

This project is licensed under the MIT License.

## 📬 Contact

If you have any questions or suggestions, feel free to contact me at [alvisuhail400@gmail.com](mailto:alvisuhail400@gmail.com).

## 💖 Thanks

Thank you for checking out this project! I hope it's helpful and inspiring.

---
Develope by Suhail with ❤️


