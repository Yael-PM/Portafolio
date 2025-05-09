import React from 'react';

const HeroSection = () => {
  const scrollToContact = () => {
    const section = document.getElementById('contact');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="name">Hola, soy <span className="highlight">[Yael Pérez]</span></h1>
        <h2 className="title">Desarrollador de Software</h2>
        <p className="description">
          Soy estudiante de Ingeniería en Tecnologías Computacionales, apasionado por construir soluciones web y móviles usando tecnologías modernas.
        </p>
        <div className="buttons">
          <a href="https://drive.google.com/file/d/12v6_tOpbMfxLZQ_cOUuTNw90pHHPWAN7/view?usp=sharing" className="btn">Ver CV</a>
          <a className="btn btn-outline" onClick={scrollToContact}>
            Contáctame
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
