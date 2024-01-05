import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/projectCard.css'; 

type ProjectCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, description, link }) => {
  return (
    <Link to={link} className="project-card">
      <img src={imageSrc} alt={title} className="project-image" />
      <div className="project-info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
