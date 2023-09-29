import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Link } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/">Iniciar Sesion</Link>
        </li>

        <li>
          <Link to="/register">Registrarse</Link>
        </li>
        
      </ul>
    </nav>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
