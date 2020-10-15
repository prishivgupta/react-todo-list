import React from 'react';
import '../App.css';
import Todo from './todo';

const TodoList = (props) => {

    return (

        <div className="todo-container">

            <ul className="todo-list">

                {props.filteredTodos.map(todo => {
                    return <Todo text={todo.text} key={todo.id} setTodos={props.setTodos} todos={props.todos} todo={todo}/>;
                })}

            </ul>

        </div>

    );

}

export default TodoList;