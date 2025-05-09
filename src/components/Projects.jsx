import React from 'react';
import ProjectCard from './ProjectCard';
import Agrosims  from '../assets/agrosims.png';
import Trendify from '../assets/trendify.png';
import Traffic from '../assets/trafico.jpeg';

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Proyectos</h2>
      <div className="projects-grid">
        <ProjectCard
          title="Tráfco con agentes"
          description="Proyecto de simulación de tráfico con agentes en Python."
          githubUrl="https://github.com/Yael-PM/Traffic_Project"
          imageUrl={Traffic}
        />
        <ProjectCard
          title="Agrosims Game"
          description="Agrosims es un juego de simulación de agricultura en 2D, desarrollado en Unity y C#."
          githubUrl="https://yael-p.itch.io/agrosims"
          imageUrl={Agrosims}
        />
        <ProjectCard
          title="Trendify System"
          description="Es un sistema de gestión de tendencias en redes sociales, desarrollado con React y Node.js."
          githubUrl="https://github.com/TrendifyIA"
          imageUrl={Trendify}
        />
      </div>
    </section>
  );
};

export default Projects;
