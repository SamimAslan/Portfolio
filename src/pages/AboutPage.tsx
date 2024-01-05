
import React from 'react';
import Header from '../components/molecules/Header';
import '../styles/about.css'


const AboutPage: React.FC = () => {
  return (
    <div className="about">
      <Header title="About" />
      <div className='card'>
        <p className='paragraph'>
          Hello, I'm Samim Aslan, a passionate Fullstack Web Developer based in Switzerland, Solothurn. With a strong foundation in web development, I thrive on creating innovative and user-friendly digital experiences.
          <br /><br />
          I'm currently part of the dynamic team at Accenture, a global leader in technology consulting, but my journey began at Noser Young, a valued partner of Accenture, where I honed my skills during my first two years while pursuing my education at Gibb.
          <br /><br />
          Beyond my professional life, I have a love for two things: football (or soccer, as some may call it) and video games. These passions keep me grounded and allow me to unwind in my free time.
          <br /><br />
          While my career is thriving, I've also been pondering the idea of starting a specialized company for developers in the future. The world of technology is evolving rapidly, and I believe there's room for innovation and collaboration that can redefine the industry.
          <br /><br />
          One of my recent projects involved working with AI, where we developed a system that could efficiently handle email responses using artificial intelligence. It was an exciting venture that showcased the endless possibilities of technology.
          <br /><br />
          I'm excited to share my journey, experiences, and insights through this platform. Whether you're interested in web development, AI, or just looking to connect, feel free to reach out and join me on this exciting digital journey.
        </p>

      </div>
    </div>
  );
};
export default AboutPage;
