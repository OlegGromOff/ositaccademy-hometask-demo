import React from "react";
import './style.css';

function TodoComponent({
  inputField,
  handleChange,
  addTodo,
  todos,
  deleteTodo,
}) {
  return (
    <div>
      <form onSubmit={addTodo}>
        <input onChange={handleChange} type="text" value={inputField}></input>
      </form>
      <ul className="list-todos" >
        {todos.map((objTodo) => {
          return (
            <div>
              <li key={objTodo.id} onClick={() => deleteTodo(objTodo.id)}>{objTodo.todo}</li>
            </div>
          );
        })}
      </ul>
    </div >
  );
}

export default TodoComponent;
