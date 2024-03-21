import ToDoWrapper from "./components/ToDoWrapper";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="" element= {<ToDoWrapper/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
