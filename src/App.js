import React, {useState, useeffect, useEffect} from 'react';
import './App.css';
import Form from './components/form';
import TodoList from './components/TodoList';


function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {

    filterHandler();

  }, [todos,status] );

  const filterHandler = () => {

    switch (status) {

      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;

      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
        break;

    }

}

  return (

    <div className="App">
      
      <h1>TO DO LIST</h1>

      <Form inputText={inputText} setInputText={setInputText} setTodos={setTodos} todos={todos} status={status} setStatus={setStatus}/>

      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>

    </div>

  );

}

export default App;
