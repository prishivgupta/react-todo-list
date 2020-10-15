import React from 'react';

const Form = (props) => {

    const inputChangeHandler = (event) => {

        props.setInputText(event.target.value);

    }
    
    const submitHandler = (event) => {

        event.preventDefault();

        props.setTodos([...props.todos, { text: props.inputText, completed: false, id: Math.random() * 1000 }]);

        props.setInputText("");

    }

    return (

        <div>

            <form>

            <input onChange={inputChangeHandler} value={props.inputText} type="text"></input>
            <button onClick={submitHandler} type="submit"></button>

             

            </form>


        </div>

    );

}

export default Form;