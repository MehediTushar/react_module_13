import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicePage from './pages/ServicePage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';
import './assets/css/styles.css';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/blog" element={<BlogPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/service" element={<ServicePage/>}/>
      <Route path="/project" element={<ProjectPage/>}/>
    </Routes>
      
    </BrowserRouter>
  );
};

export default App;