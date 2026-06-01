import React, { useState } from 'react';
import SkillBadge from '../components/SkillBadge';

const AboutPage = () => {

  const [verDetalles, setVerDetalles] = useState(true);


  const experiencia = [
    { puesto: "Creador de Primus ARG", institucion: "Primus ARG e-commerce", periodo: "2025 - Presente" },
    { puesto: "axuliar soporte tecnico", institucion: "fiat montironi", periodo: "2025" }
  ];

  const educacion = [
    { titulo: "Analista en sistemas", institucion: "Institucion Cervantes", periodo: "2023-2026" },
    { titulo: "Bachiller en informatica", institucion: "Ipem 11", periodo: "2016-2021" }
  ];

  const todasLasSkills = ["React Router", "State Management", "Git & GitHub", "Tailwind CSS", "Análisis de Métricas"];

  return (
    <div className="py-3">
      <h2 className="fw-bold mb-3">Sobre Mí</h2>
      <p className="lead text-muted mb-4">
Futuro analista en sistemas con diplomatura en gestion de negocios, me oriento a trabajar con empresas que les interesa automatizar sus procesos, como Dueño de ecommerce en Argentina conozco de forma integral todas las partes que compone un negocio rentable
      </p>


      <button 
        className={`btn btn-sm mb-4 ${verDetalles ? 'btn-outline-danger' : 'btn-outline-primary'}`} 
        onClick={() => setVerDetalles(!verDetalles)}
      >
        {verDetalles ? "👁️ Ocultar Detalles Académicos" : "👁️ Mostrar Detalles Académicos"}
      </button>


      {verDetalles && (
        <div className="row g-4">
          <div className="col-md-6">
            <h4 className="fw-bold border-bottom pb-2">Experiencia Laboral</h4>
            <div className="list-group list-group-flush">
              {experiencia.map((exp, index) => (
                <div key={index} className="list-group-item bg-transparent px-0 border-0 text-inherit">
                  <h6 className="mb-1 fw-bold text-primary">{exp.puesto}</h6>
                  <small className="d-block text-muted">{exp.institucion} — <em>{exp.periodo}</em></small>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-6">
            <h4 className="fw-bold border-bottom pb-2">Educación</h4>
            <div className="list-group list-group-flush">
              {educacion.map((edu, index) => (
                <div key={index} className="list-group-item bg-transparent px-0 border-0 text-inherit">
                  <h6 className="mb-1 fw-bold text-success">{edu.titulo}</h6>
                  <small className="d-block text-muted">{edu.institucion} — <em>{edu.periodo}</em></small>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="mt-5">
        <h4 className="fw-bold mb-3">Habilidades Técnicas complementarias</h4>
        <div className="d-flex flex-wrap mt-2">
          {todasLasSkills.map((skill, index) => (
            <SkillBadge key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;