import React from 'react';
import Header from '../molecules/Header';
import ProjectBox from '../molecules/ProjectBox';
import '../../styles/homePage.css';


const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <Header title="Hey, This is Samim!" />
      <div className="project-container">
        <ProjectBox title="10+" description="Completed Projects" className='project-box' />
        <ProjectBox title="Javascript" description="" className='project-box' />
        
        <ProjectBox title="Project 1" description="A cool project I've worked on." className='project-box' />
        <ProjectBox title="Project 1" description="A cool project I've worked on." className='project-box' />
        
        <ProjectBox title="3 Years" description="of coding experience" className='project-box' />
        <ProjectBox title="Project 1" description="A cool project I've worked on." className='project-box' />
        <ProjectBox title="Project 1" description="A cool project I've worked on." className='project-box' />
        <ProjectBox title="Project 1" description="A cool project I've worked on." className='project-box' />


      </div>
    </div>
  );
};
export default HomePage;
