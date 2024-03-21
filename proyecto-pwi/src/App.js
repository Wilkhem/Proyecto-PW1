import ToDoWrapper from "./components/ToDoWrapper";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditToDoForm from "./components/EditToDoForm";


function App() {
  return (
    <div className="App">
      <h1>To-Do List</h1>
     <ToDoWrapper />
    </div>
  );
}

export default App;
