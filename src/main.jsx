import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import LoginPage from './pages/LoginPage'

ReactDOM.createRoot(document.getElementById('root')).render(

  <HashRouter>
    <Routes>
      <Route path="/" element={<LoginPage /> } />
      <Route path="/app/*" element={<App /> } />
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  </HashRouter>
 
)
