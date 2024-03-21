import React, { useState } from 'react'

const ToDoForm = ({ addTodo }) => {

  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  }

  return (
    <>
      <form action="" className="TodoForm" onSubmit={handleSubmit}>
        <input type="text" className='todo-input' placeholder='¿Que tienes pensando hacer hoy?' onChange={(e) => setValue(e.target.value)} />
        <button type='submit' className='todo-btn'>Añadir Tarea</button>
      </form>
    </>
  )
}

export default ToDoForm
