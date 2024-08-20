
import React, { useState, createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


export const LoginContext = createContext({
  isLoggedIn: false,
  user: {},
  setUser: () => { },
  setIsLoggedIn: () => { }
});

const AppWrapper = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  return (
    <LoginContext.Provider value={{
      isLoggedIn,
      setIsLoggedIn,
      user,
      setUser,
    }} >
      <App />
    </LoginContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
)
