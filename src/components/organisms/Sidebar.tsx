import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sidebar.css';
import profilePic from '../../images/samims.jpg'; 
import coffeeIcon from '../../images/Coffee.png';
import video from '../../images/video.png';
import at from '../../images/at.png';
import database from '../../images/database.png';
import archive from '../../images/archive.png';

const Sidebar: React.FC = () => {
  return (
    <nav className="sidebar">
      <img src={profilePic} alt="Profile" className="sidebar-profile-pic" />
      <p className="sidebar-profile-name">Samim Aslan</p>
      <p className="sidebar-profile-title">Junior Web-Developer</p>
      <Link to="/" className="sidebar-item"><img src={coffeeIcon} alt="Home" className="sidebar-icon" />Home</Link>
      <Link to="/projects" className="sidebar-item"><img src={database} alt="Projects" className="sidebar-icon" />Projects</Link>
      <Link to="/videos" className="sidebar-item"><img src={video} alt="Videos" className="sidebar-icon" />Videos</Link>
      <Link to="/about" className="sidebar-item"><img src={at} alt="About" className="sidebar-icon" />About</Link>
      <Link to="/contact" className="sidebar-item"><img src={archive} alt="Contact" className="sidebar-icon" />Contact</Link>
    </nav>
  );
};

export default Sidebar;
