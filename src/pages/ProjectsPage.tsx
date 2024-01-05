import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import gmail from '../images/gmail.jpg';
import java from '../images/java.jpg';
import portfolio from '../images/portfolio.jpg';
import esp32 from '../images/esp32.jpg';
import portfolio2 from '../images/portfolio2.jpg';
import '../styles/projectCard.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const projectList = [
  {
    id: 1,
    title: "Gmail with ChatGPT API",
    description: "Gmail which can be answered by AI fastly without losing time.",
    image: gmail,
    categories: ["React Ts", "Firebase", "ChatGPT API"],
    link: "https://github.com/SamimAslan/gmail-ai/tree/main/gmail-clone-main"
  },
  {
    id: 2,
    title: "Wood Calculator",
    description: "A Java Project where I tried interfaces and abstract classes.",
    image: java,
    categories: ["Java"],
    link: "https://github.com/SamimAslan/Java-Wood-Calculator"
  },
  {
    id: 3,
    title: "Old Portfolio",
    description: "My 2 years old, old Portfolio which I tried to make something good.",
    image: portfolio,
    categories: ["Javascript"],
    link: "https://github.com/SamimAslan/old_portfolio"
  },
  {
    id: 4,
    title: "Arduino Light Sensor",
    description: "It can detect light with a sensor and tell if the post has arrived.",
    image: esp32,
    categories: ["C++", "ESP32"],
    link: "https://github.com/SamimAslan/arduino_post"
  },
  {
    id: 5,
    title: "Portfolio v2.0",
    description: "Newest Portfolio that I've made as a Project",
    image: portfolio2,
    categories: ["React Ts"],
    link: "https://github.com/SamimAslan/Portfolio"
  }
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');

  const handleSelectCategory = (category: string) => {
    setFilter(category);
  };

  const filteredProjects = filter === 'All' ? projectList : projectList.filter(project => project.categories.includes(filter));

  return (
    <div className="project-page-container">
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
          Filter Categories
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a className="dropdown-item" href="#!" onClick={() => handleSelectCategory('All')}>All</a></li>
          <li><a className="dropdown-item" href="#!" onClick={() => handleSelectCategory('React Ts')}>React Ts</a></li>
          <li><a className="dropdown-item" href="#!" onClick={() => handleSelectCategory('Firebase')}>Firebase</a></li>
          <li><a className="dropdown-item" href="#!" onClick={() => handleSelectCategory('ChatGPT API')}>ChatGPT API</a></li>
          <li><a className="dropdown-item" href="#!" onClick={() => handleSelectCategory('Java')}>Java</a></li>
          <li><a className="dropdown-item" href="#!" onClick={() => handleSelectCategory('Javascript')}>Javascript</a></li>
          <li><a className="dropdown-item" href="#!" onClick={() => handleSelectCategory('C++')}>C++</a></li>
        </ul>
      </div>
      <h1 className="project-title">All Projects</h1>
      <div className="project-grid">
        {filteredProjects.map((project) => (
          <Link to={project.link} className="project-item" key={project.id}>
            <img src={project.image} alt={project.title} className="project-thumbnail" />
            {project.categories.map((category, index) => (
              <span className="badge rounded-pill bg-secondary" key={index}>{category}</span>
            ))}
            <div className="project-info">
              <h5>{project.title}</h5>
              <p className='text'>{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
