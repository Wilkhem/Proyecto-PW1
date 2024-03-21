import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import { v4 as uuidv4 } from 'uuid'
uuidv4();

const ToDoWrapper = () => {

  const [todos, setTodos] = useState([]);
 
  const addTodo = todo => {
    setTodos([...todos, {
      id: uuidv4(), task: todo, completed: false,
      isEditing: false
    }])
    console.log(todos);
  }

  const handleCheck = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed, isEditing: !todo.isEditing};
      }
      return todo;
    }));
  };

  return (
    <div className='TodoWrapper'>
      <ToDoForm addTodo={addTodo} />

      {
        todos.map((item) => (
          <div className='content-task' key={item.id}>
            <div className='contenido-id'>{item.id}</div>
            <div className='content-header'>
              <div className='content-task-btn'>
                <div className='chek-task'>
                  <input className="form-check-input" type="checkbox" id={`cehck${item.id}`} checked={item.completed}
                    onChange={() => handleCheck(item.id)}></input>
                  <p className={item.completed ? 'texto-tachado' : ''}>Tarea {item.task}</p>
                </div>
                <div className='content-btn'>
                <button className='btn_Edi'><i className='fa-solid fa-pen-to-square'></i></button>
                <button className='btn'><i className='fa-solid fa-trash'></i></button>
                </div>
              </div>
              <div className='content-status'>
                <span>Completado: {item.completed.toString()}</span>
                <span>Finalizado: {item.isEditing.toString()}</span>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ToDoWrapper
