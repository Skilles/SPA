import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import Menubar from './components/Menubar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import RecipeDetail from './components/pages/RecipeDetail';

function App() {
  return (
    <BrowserRouter>
      <Menubar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
