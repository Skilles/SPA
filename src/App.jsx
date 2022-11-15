import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Menubar from './components/Menubar';
import Home from './components/pages/HomePage';
import About from './components/pages/AboutPage';
import RecipeDetail from './components/pages/recipe/RecipeDetail';
import RecipeCreate from './components/pages/recipe/RecipeCreatePage';
import Signin from './components/pages/user/SigninPage';
import Signup from './components/pages/user/SignupPage';
import User from './components/pages/user/UserPage';
import Header from './components/Header';
import HeaderImage from './images/header.png';


function App() {
  return (
    <>
      <Menubar />
      <Header title="Recipebook" image={HeaderImage} />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/recipe/create" element={<RecipeCreate />} />


          <Route path="/user" element={<User />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
