import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../src/pages/home-page/index';
import AboutPage from './pages/about-page';
import BlogPage from './pages/blog-page';
import ContactMePage from './pages/contact-page';
import ForDoctorsPage from './pages/for-doctors-page';

import './App.scss';
import Header from './components/header';


function App() {

  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactMePage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/for-doctors' element={<ForDoctorsPage />} />
        </Routes>
    </div>
  );
}

export default App;
