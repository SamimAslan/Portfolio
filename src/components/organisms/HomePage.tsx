import React from 'react';
import Header from '../molecules/Header';
import ProjectBox from '../molecules/ProjectBox';
import '../../styles/homePage.css';


const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <Header title="Hey, This is Samim!" />
      <div className="project-container">
        <ProjectBox title="React" description="Typescript / Javascript" className='project-box' />
        <ProjectBox title="Javascript" description="" className='project-box' />
        
        <ProjectBox title="Projects I've made so far" description="
I have created projects like an AI-powered email system using the ChatGPT API, a Java wood calculator, an interactive old portfolio in JavaScript, an Arduino light sensor for mail notifications, and an updated personal portfolio to display my recent work." className='project-box-large' />
        <div></div>
        <ProjectBox title="10+" description="Completed Projects" className='project-box-up' />
        <ProjectBox title="Java" description="" className='project-box-up' />
        <ProjectBox title="Problem solving, teamwork and adaptability" description="are some soft skills of mine" className='project-box-mid' />
        <div></div>
        <ProjectBox title="3 Years" description="of coding experience" className='project-box-mid-bottom' />
        <div></div>
        <ProjectBox title=" Courses and Certificates that i got" description="" className='project-box-mid-up' />



      </div>
    </div>
  );
};
export default HomePage;
