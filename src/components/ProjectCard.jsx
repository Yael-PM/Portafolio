import React from 'react';

const ProjectCard = ({ title, description, githubUrl, imageUrl }) => {
  return (
    <div className="project-card">
      {imageUrl && <img src={imageUrl} alt={title} className="project-image" />}
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-button">
          Ver en GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
