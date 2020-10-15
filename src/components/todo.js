import React from 'react';

const TodoList = (props) => {

    const deleteHandler = () => {

        props.setTodos(props.todos.filter(t => (t.id !== props.todo.id)));

        console.log("FG");

    }

    return (

        <div>

            <ul>

                <li>
                    {props.text}
                    <button >a</button>
                    <button onClick={deleteHandler}>d</button>
                </li>

            </ul>

        </div>

    );

}

export default TodoList;