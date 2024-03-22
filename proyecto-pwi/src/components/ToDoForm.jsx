import React, { useState } from 'react';

const ToDoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() === '') {
      setShowAlert(true);
    } else {
      addTodo(value);
      setValue(''); // Limpiamos el campo de entrada después de agregar una tarea
      setShowAlert(false);
    }
  };

  return (
    <>
      {showAlert && (
        <div className="alert alert-danger" role="alert">
          ¡El campo no puede estar vacío!
        </div>
      )}

      <form className="TodoForm" onSubmit={handleSubmit}>
        <div className='Validar'>
          <input 
            type="text" 
            className='todo-input' 
            placeholder='¿Qué tienes pensando hacer hoy?'
            value={value} 
            onChange={(e) => { 
              setValue(e.target.value);
              setShowAlert(false); // Ocultar la alerta al comenzar a escribir de nuevo
            }}
          />
          <button type='submit' className='todo-btn'>Añadir Tarea</button>
        </div>
      </form>
    </>
  );
};

export default ToDoForm;