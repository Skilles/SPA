import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Menubar from './components/Menubar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ProductDetail from './components/pages/ProductDetail';

function App() {
  return (
    <HashRouter>
      <Menubar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
