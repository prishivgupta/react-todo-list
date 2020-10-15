import React from 'react';

const TodoList = (props) => {

    const deleteHandler = () => {

        props.setTodos(props.todos.filter(t => (t.id !== props.todo.id)));

        console.log("FG");

    }

    const completeHandler = () => {

        props.setTodos(props.todos.map(todo => {

            if(todo.id === props.todo.id) {
                return {
                    ...todo, completed: !todo.completed
                };
            }

            return todo;

        }))

    }

    return (

        <div>

            <ul>

                <li>
                    {props.text}
                    <button onClick={completeHandler}>a</button>
                    <button onClick={deleteHandler}>d</button>
                </li>

            </ul>

        </div>

    );

}

export default TodoList;