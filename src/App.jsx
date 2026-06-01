import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useLocalStorage } from './hooks/useLocalStorage';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  // Inicializa el tema usando el custom hook (por defecto en 'light')
  const [tema, setTema] = useLocalStorage('tema', 'light');

  // Función para alternar entre los dos estados del tema
  const toggleTema = () => {
    setTema((prevTema) => (prevTema === 'dark' ? 'light' : 'dark'));
  };

  return (
    <HashRouter>
      {/* Aplicamos template literals dinámicos en el contenedor principal según las consignas */}
      <div className={`min-vh-100 ${tema === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        
        {/* Pasamos el estado del tema y la función como props al Navbar */}
        <Navbar tema={tema} toggleTema={toggleTema} />
        
        <div className="container py-4">
          {/* Definición de las rutas obligatorias solicitadas para la SPA */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>

      </div>
    </HashRouter>
  );
}

export default App;