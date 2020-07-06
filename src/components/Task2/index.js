import React from "react";
import TaskInput from "../Taskinput";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ id: Date.now(), todo: "Todo Item" }],
      inputField: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      inputField: e.target.value
    });
  };

  addTodo = (e) => {
    e.preventDefault();
    let obj = {
      id: Date.now(),
      todo: this.state.inputField,
    };
    if (this.state.inputField) {
      this.setState({
        todos: [...this.state.todos, obj],
        inputField: "",
      });
    }
  };

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((obj) => obj.id !== id),
    });
  };

  render() {
    return (
      <div>
        <TaskInput
          todos={this.state.todos}
          inputField={this.state.inputField}
          handleChange={this.handleChange}
          addTodo={this.addTodo}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}
export default TodoList;

