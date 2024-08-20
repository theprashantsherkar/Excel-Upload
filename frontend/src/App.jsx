import React, { useContext, useEffect, useState } from 'react'

import Dashboard from './pages/Dashboard.jsx';
import { Route, Routes, BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import axios from 'axios';
import { LoginContext } from './main.jsx';




export const backend_URL = 'http://localhost:8000';
function App() {

  const { setUser, user, setIsLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    async function getUser() {
      try {
        const { data } = await axios.get(`${backend_URL}/admin/profile`, {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true,
        })
        setUser(data.User);
        setIsLoggedIn(true);
      } catch (error) {
        console.log('error in App.js');
      }
    }
    getUser();
  }, [Routes, Profile])

  return (

    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />

      </Routes>
      <Toaster />
    </Router>


  )
}

export default App

