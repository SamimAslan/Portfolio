// App.tsx
import React from 'react';
import Home from './pages/Home';
import './styles/globals.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Sidebar from './components/organisms/Sidebar';
import HomePage from './components/organisms/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import VideosPage from './pages/VideosPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';



function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <div className="content-area">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;