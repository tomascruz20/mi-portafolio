import React from 'react';
import { Link } from 'react-router-dom';
import SkillBadge from '../components/SkillBadge';

const HomePage = () => {
  // Datos requeridos en el Paso 6
  const infoPersonal = {
    nombre: "Tomas Cruz",
    titulo: " Desarrollador Frontend",
    skills: ["React.js", "JavaScript ES6", "Bootstrap 5", "UI/UX Design"]
  };

  return (
    <div className="text-center py-5 animate__animated animate__fadeIn">
      <div className="d-flex justify-content-center mb-4">
        <div className="rounded-circle bg-warning d-flex align-items-center justify-content-center text-dark fw-bold shadow" style={{ width: '120px', height: '120px', fontSize: '2.5rem' }}>
          A
        </div>
      </div>

      <h1 className="display-4 fw-bold">{infoPersonal.nombre}</h1>
      <p className="lead text-muted">{infoPersonal.titulo}</p>
      
      <div className="my-5">
        <h5 className="fw-bold mb-3">Habilidades Principales:</h5>
        <div className="d-flex justify-content-center flex-wrap gap-1" style={{ maxWidth: '600px', margin: '0 auto' }}>
          {infoPersonal.skills.map((skill, index) => (
            <SkillBadge key={index} skill={skill} />
          ))}
        </div>
      </div>

      <div className="mt-4">
        <Link to="https://www.linkedin.com/in/tomas-cruz-2231a72b0/" className="btn btn-warning btn-lg fw-bold px-4 shadow-sm">
          ¡Contáctame!
        </Link>
      </div>
    </div>
  );
};

export default HomePage;