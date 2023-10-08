import React from 'react'
import ReactDOM from 'react-dom/client'
import Sky from './pages/sky/Sky.jsx';
import './pages/sky/Sky.css';

import './index.css'
import ResponsiveAppBar from './components/navbar/Navbar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResponsiveAppBar />
    <Sky />
  </React.StrictMode>,
)
