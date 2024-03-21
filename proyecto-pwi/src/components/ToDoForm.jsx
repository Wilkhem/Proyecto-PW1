import React, { useState } from 'react';

const ToDoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    setValue(''); // Limpiamos el campo de entrada después de agregar una tarea
  };

  return (
    <>
      <form action="" className="TodoForm" onSubmit={handleSubmit}>
        <input 
          type="text" 
          className='todo-input' 
          placeholder='¿Qué tienes pensando hacer hoy?'
          value={value} 
          onChange={e => setValue(e.target.value)} 
        />
        <button type='submit' className='todo-btn'>Añadir Tarea</button>
      </form>
    </>
  );
};

export default ToDoForm;