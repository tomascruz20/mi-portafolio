import React, { useState, useReducer } from 'react';


const estadoInicial = {
  valores: { nombre: '', email: '', mensaje: '' },
  tocados: { nombre: false, email: false, mensaje: false }
};


function formularioReducer(state, action) {
  switch (action.type) {
    case 'ACTUALIZAR_CAMPO':
      return {
        ...state,
        valores: { ...state.valores, [action.campo]: action.valor }
      };
    case 'TOCAR_CAMPO':
      return {
        ...state,
        tocados: { ...state.tocados, [action.campo]: true }
      };
    case 'RESET':
      return estadoInicial;
    default:
      return state;
  }
}

const ContactPage = () => {
  const [state, dispatch] = useReducer(formularioReducer, estadoInicial);
  const [mostrarExito, setMostrarExito] = useState(false);


  const validarNombre = (valor) => valor.trim().length >= 3;
  const validarEmail = (valor) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
  const validarMensaje = (valor) => valor.trim().length >= 10;


  const esInvalidoNombre = state.tocados.nombre && !validarNombre(state.valores.nombre);
  const esInvalidoEmail = state.tocados.email && !validarEmail(state.valores.email);
  const esInvalidoMensaje = state.tocados.mensaje && !validarMensaje(state.valores.mensaje);

  
  const handleBlur = (campo) => {
    dispatch({ type: 'TOCAR_CAMPO', campo });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();


    dispatch({ type: 'TOCAR_CAMPO', campo: 'nombre' });
    dispatch({ type: 'TOCAR_CAMPO', campo: 'email' });
    dispatch({ type: 'TOCAR_CAMPO', campo: 'mensaje' });

   
    if (validarNombre(state.valores.nombre) && validarEmail(state.valores.email) && validarMensaje(state.valores.mensaje)) {
      setMostrarExito(true);

      
      setTimeout(() => {
        setMostrarExito(false);
        dispatch({ type: 'RESET' }); 
      }, 4000);
    }
  };

  return (
    <div className="mx-auto" style={{ maxWidth: '600px' }}>
      <h2 className="fw-bold mb-3">Contacto</h2>
      <p className="text-muted mb-4">¿Tenés alguna consulta o propuesta? Dejame tu mensaje.</p>

   
      {mostrarExito && (
        <div className="alert alert-success animate__animated animate__fadeIn" role="alert">
          ¡Formulario enviado con éxito! Te responderé a la brevedad.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
      
        <div className="mb-3">
          <label className="form-label fw-semibold">Nombre completo</label>
          <input
            type="text"
            className={`form-control ${state.tocados.nombre ? (esInvalidoNombre ? 'is-invalid' : 'is-valid') : ''}`}
            value={state.valores.nombre}
            onChange={(e) => dispatch({ type: 'ACTUALIZAR_CAMPO', campo: 'nombre', valor: e.target.value })}
            onBlur={() => handleBlur('nombre')}
          />
          {esInvalidoNombre && <div className="invalid-feedback">El nombre debe tener un mínimo de 3 caracteres.</div>}
        </div>

 
        <div className="mb-3">
          <label className="form-label fw-semibold">Correo electrónico</label>
          <input
            type="email"
            className={`form-control ${state.tocados.email ? (esInvalidoEmail ? 'is-invalid' : 'is-valid') : ''}`}
            value={state.valores.email}
            onChange={(e) => dispatch({ type: 'ACTUALIZAR_CAMPO', campo: 'email', valor: e.target.value })}
            onBlur={() => handleBlur('email')}
          />
          {esInvalidoEmail && <div className="invalid-feedback">Ingresá una dirección de correo válida (ej@correo.com).</div>}
        </div>

   
        <div className="mb-3">
          <label className="form-label fw-semibold">Mensaje</label>
          <textarea
            className={`form-control ${state.tocados.mensaje ? (esInvalidoMensaje ? 'is-invalid' : 'is-valid') : ''}`}
            rows="4"
            value={state.valores.mensaje}
            onChange={(e) => dispatch({ type: 'ACTUALIZAR_CAMPO', campo: 'mensaje', valor: e.target.value })}
            onBlur={() => handleBlur('mensaje')}
          ></textarea>
          {esInvalidoMensaje && <div className="invalid-feedback">El mensaje es demasiado corto (mínimo 10 caracteres).</div>}
        </div>

     
        <div className="d-flex gap-2 mt-4">
          <button type="submit" className="btn btn-primary px-4 fw-bold">Enviar</button>
          
      
          <button 
            type="button" 
            className="btn btn-outline-danger" 
            onClick={() => dispatch({ type: 'RESET' })}
          >
            Limpiar Campos
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;