import React from 'react';
import '../App.css';

const Form = (props) => {

    const inputChangeHandler = (event) => {

        props.setInputText(event.target.value);

    }
    
    const submitHandler = (event) => {

        event.preventDefault();

        props.setTodos([...props.todos, { text: props.inputText, completed: false, id: Math.random() * 1000 }]);

        props.setInputText("");

    }

    const stateHandler = (event) => {

        props.setStatus(event.target.value);

    }

    return (

        <div>

            <form>

            <input className="todo-input" onChange={inputChangeHandler} value={props.inputText} type="text"></input>
            <button className="todo-button" onClick={submitHandler} type="submit"></button>

             <select name="todos" className="filter-todo" onChange={stateHandler}>

                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>

             </select>

            </form>


        </div>

    );

}

export default Form;