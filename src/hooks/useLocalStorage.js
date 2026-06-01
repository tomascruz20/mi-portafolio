import { useState, useEffect } from 'react';

export const useLocalStorage = (clave, valorInicial) => {
  // Inicializa el estado buscando si ya existe algo guardado en el navegador
  const [valor, setValor] = useState(() => {
    try {
      const item = window.localStorage.getItem(clave);
      return item ? JSON.parse(item) : valorInicial;
    } catch (error) {
      console.error("Error leyendo localStorage:", error);
      return valorInicial;
    }
  });

  // Cada vez que el valor cambie (por ejemplo al hacer click en el botón de tema), lo guarda
  useEffect(() => {
    try {
      window.localStorage.setItem(clave, JSON.stringify(valor));
    } catch (error) {
      console.error("Error escribiendo en localStorage:", error);
    }
  }, [clave, valor]);

  return [valor, setValor];
};