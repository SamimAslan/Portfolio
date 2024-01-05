import React from 'react';
import '../../styles/projectBox.css';

type ProjectBoxProps = {
  title: string;
  description: string;
  className?: string; 
};
const ProjectBox: React.FC<ProjectBoxProps> = ({ title, description, className }) => {
  return (
    
    <div className={`project-box ${className}`}>
      <h3 className='titleColor'>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectBox;
