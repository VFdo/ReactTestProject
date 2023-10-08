import React from 'react'
import ReactDOM from 'react-dom/client'
// import Sky from './pages/sky/Sky.jsx';
// import Moon from './pages/moon/Moon.jsx';

import './index.css'
import ResponsiveAppBar from './components/navbar/Navbar.jsx';
import Stars from './pages/stars/Stars.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResponsiveAppBar />
    <Stars />
  </React.StrictMode>,
)
