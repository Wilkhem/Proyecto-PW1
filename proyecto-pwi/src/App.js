import ToDoWrapper from "./components/ToDoWrapper";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditToDoForm from "./components/EditToDoForm";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="" element= {<ToDoWrapper/>} />
    <Route path="/Editar" element= {<EditToDoForm/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
