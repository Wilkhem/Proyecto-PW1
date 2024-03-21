import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import { v4 as uuidv4 } from 'uuid';

const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTask, setEditedTask] = useState('');
  const [inputValue, setInputValue] = useState('');

  const addTodo = todo => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
    setInputValue(''); // Reseteamos el valor del campo de entrada después de agregar una tarea
  };

  const handleCheck = id => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed, isEditing: !todo.isEditing };
      }
      return todo;
    }));
  };

  const handleEdit = (id, newTask) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: newTask, isEditing: false };
      }
      return todo;
    }));
    setEditingTaskId(null);
    setEditedTask('');
  };

  const handleDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className='TodoWrapper'>
      <ToDoForm inputValue={inputValue} onInputChange={setInputValue} addTodo={addTodo} />

      {todos.map(item => (
        <div className='content-task' key={item.id}>
          <div className='contenido-id'>{item.id}</div>
          <div className='content-header'>
            <div className='content-task-btn'>
              <div className='chek-task'>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`check${item.id}`}
                  checked={item.completed}
                  onChange={() => handleCheck(item.id)}
                />
                {editingTaskId === item.id ? (
                  <input
                    type="text"
                    value={editedTask}
                    onChange={e => setEditedTask(e.target.value)}
                    placeholder="Editar tarea..."
                  />
                ) : (
                  <p className={item.completed ? 'texto-tachado' : ''}>tarea {item.task}</p>
                )}
              </div>
              <div className='content-btn'>
                {editingTaskId === item.id ? (
                  <button className='btn' onClick={() => handleEdit(item.id, editedTask)}>
                    Guardar
                  </button>
                ) : (
                  <button
                    className='btn'
                    onClick={() => {
                      setEditingTaskId(item.id);
                      setEditedTask(item.task);
                    }}
                  >
                    Editar
                  </button>
                )}
                <button className='btn' onClick={() => handleDelete(item.id)}>
                  <i className='fa-solid fa-trash'></i>
                </button>
              </div>
            </div>
            {item.completed && (
              <div className='content-status'>
                <button className='btn'>Tarea Completada</button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToDoWrapper;