import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../../styles/projectBox.css';

interface ProjectBoxProps {
  title: string;
  description: string;
  className?: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({ title, description, className = '' }) => {
  const navigate = useNavigate();

const handleNavigation = () => {
  navigate('/projects'); 
};
const handleNavigate = () => {
  window.open('https://drive.google.com/file/d/17fMR8dg_8eggbuNYYnAC7xuEldtXbEYl/view'); 
};

  return (
    
    <div className={`project-box ${className}`}>
      <h3 className='titleColor'>{title}</h3>
      <p>{description}</p>
      {className.includes('project-box-large') && (
        <button onClick={handleNavigation} className="navigate-arrow">➤</button>
      )}

{className.includes('project-box-mid-up') && (
        <button onClick={handleNavigate} className="navigate-arrow">➤</button>
      )}
          </div>
  );
};

export default ProjectBox;
