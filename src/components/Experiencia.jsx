import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';

const Experiencia = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Habilidades</h2>
      <div className="skills-icons">
        <div className="skill">
          <FaHtml5 className="icon" />
          <span>HTML5</span>
        </div>
        <div className="skill">
          <FaCss3Alt className="icon" />
          <span>CSS3</span>
        </div>
        <div className="skill">
          <FaJs className="icon" />
          <span>JavaScript</span>
        </div>
        <div className="skill">
          <FaReact className="icon" />
          <span>React</span>
        </div>
        <div className="skill">
          <FaNodeJs className="icon" />
          <span>Node.js</span>
        </div>
        <div className="skill">
          <FaDatabase className="icon" />
          <span>SQL</span>
        </div>
        <div className="skill">
          <FaGitAlt className="icon" />
          <span>Git</span>
        </div>
      </div>

      <h2 className="section-title">Experiencia</h2>
      <ul className="text-block">
        <li>Realización de un DSL para la programación de un simulador de cruces de semáforo con objetivo en el análisis de eficiencia en Clojure.</li>
        <li>Desarrollo de videojuego con Unity y estándares de tecnologías web enfocado en la educación financiera para personas dedicadas al sector agrícola.</li>
        <li>Programación de páginas web para la visualización de datos de interés analítico en IoT.</li>
        <li>Desarrollo de una tienda de e-commerce utilizando el stack MERN para apoyo a pequeñas y medianas empresas después de la pandemia. </li>
        <li>Programación de una página web con JSP y estándares web para la adopción de mascotas con el objetivo de reducir la cantidad de perros callejeros en México. </li>
        <li>Programación de aplicaciones móviles con Android Studio.</li>
        <li>Uso de Flet para el desarrollo de interfaces gráficas en Python y mejora de la UX.</li>
      </ul>

      <h2 className="section-title">Educación</h2>
      <p className="text-block">
        Estudiante de Ingeniería en Tecnologías Computacionales en el Tecnológico de Monterrey. Enfocado en desarrollo web, estructuras de datos y gráficos por computador.
      </p>
    </section>
  );
};

export default Experiencia;
