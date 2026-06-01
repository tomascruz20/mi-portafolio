import React, { useState, useEffect } from 'react';
import dataProyectos from '../data/proyectos.json';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = () => {

  const [proyectos, setProyectos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const simularFetchApi = async () => {
      try {
  
        await new Promise((resolve) => setTimeout(resolve, 1500));
        
    
        setProyectos(dataProyectos);
      } catch (err) {

        setError("Ocurrió un error al intentar recuperar la lista de proyectos.");
      } finally {

        setCargando(false);
      }
    };

    simularFetchApi();
  }, []);


  if (cargando) {
    return (
      <div className="text-center my-5 py-5">
        <div className="spinner-border text-primary mb-3" role="status"></div>
        <h3>⏳ Cargando proyectos desde el servidor...</h3>
        <p className="text-muted">Por favor, espere un momento.</p>
      </div>
    );
  }


  if (error) {
    return (
      <div className="alert alert-danger my-5 p-4 shadow-sm" role="alert">
        <h4 className="alert-heading fw-bold">❌ Error en la carga</h4>
        <p className="mb-0">{error}</p>
      </div>
    );
  }

  return (
    <div className="py-3">
      <h2 className="fw-bold mb-2">Mis Proyectos</h2>
      <p className="text-muted mb-4">
        Una selección de mis trabajos prácticos recientes cargados dinámicamente.
      </p>
      
      <div className="row">
        {proyectos.map((proyecto) => (
          <ProjectCard key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;