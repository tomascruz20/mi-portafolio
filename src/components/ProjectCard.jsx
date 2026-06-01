import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ proyecto }) => {
  return (
    <div className="col-md-6 mb-4">
      <div className="card h-100 shadow-sm text-dark bg-white">
        <img 
          src={proyecto.imagen} 
          className="card-img-top" 
          alt={proyecto.nombre} 
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold">{proyecto.nombre}</h5>
          <p className="card-text text-muted flex-grow-1">{proyecto.descripcion}</p>
          <div className="mt-2">
            {proyecto.tecnologias.map((tech, index) => (
              <span key={index} className="badge bg-secondary me-1 mb-1">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  proyecto: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    tecnologias: PropTypes.array.isRequired,
  }).isRequired,
};

export default ProjectCard;