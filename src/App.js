import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button,Table } from 'react-bootstrap';
import ToDoList from './components/toDoList/ToDoList';
import Test from './components/toDoList/Test'


function App() {
  return (
    <div className="App">
      <div className="App-form">
        {/* <ToDoList /> */}
        <Test />
      </div>
    </div>
  );
}

export default App;
