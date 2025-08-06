
<<<<<<< HEAD
import { Routes, Route, Navigate } from "react-router-dom";
=======
import { Route } from 'react-router-dom'
>>>>>>> fa0343ce92d0a08d9f1412537d7be41cb46bc15c
import './index.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import Settings from './pages/Settings'
import ProfilePage from './pages/ProfilePage'
<<<<<<< HEAD
import { useEffect } from 'react'


import { useAuthStore } from "./store/useAuthStore.js";
import { Loader } from "lucide-react";

function App() {

   const { authUser, checkAuth, isCheckingAuth} = useAuthStore();


     useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );

  console.log({ authUser });

=======

function App() {

>>>>>>> fa0343ce92d0a08d9f1412537d7be41cb46bc15c

  return (
   <div>
     <Navbar />

      <Routes>
<<<<<<< HEAD
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
      </Routes>

=======
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/profile" element={<ProfilePage/>} />
      </Routes>
>>>>>>> fa0343ce92d0a08d9f1412537d7be41cb46bc15c
   </div>
  )
}

export default App
