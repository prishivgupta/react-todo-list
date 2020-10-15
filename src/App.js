import React, {useState} from 'react';
import './App.css';
import Form from './components/form';
import TodoList from './components/todo';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (

    <div className="App">
      
      <h1>TO DO LIST</h1>

      <Form inputText={inputText} setInputText={setInputText} setTodos={setTodos} todos={todos}/>

      {todos.map(todo => {
        return <TodoList text={todo.text} key={todo.id} setTodos={setTodos} todos={todos} todo={todo}/>;
      })}

      

    </div>

  );

}

export default App;
