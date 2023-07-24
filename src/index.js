import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Error from './Views/Error.js';
import Home from './Views/Home.js';
import About from './Views/About.js';
import Context from './Views/Context.js';
import Information from './Views/Information.js';

const routes = [
  { path: '/', element: <App /> },
  { path: '/home', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/context', element: <Context /> },
  { path: '/information', element: <Information /> },
  { path: '*', element: <Error /> },
];

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  </React.StrictMode>
);
