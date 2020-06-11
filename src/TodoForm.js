import React, { Component } from "react";
import uuid from "uuid/dist/v4";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { todoname:"" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    const newTodo = { ...this.state, id: uuid(), isEdit: false };
    this.props.createTodo(newTodo);
    this.setState({
      todoname: ""
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="Todoform">
        <div>
          <p><label htmlFor="todo">New todo</label></p>
          <input
            type="text"
            name="todoname"
            id="todo"
            value={this.state.todoname}
            onChange={this.handleChange}
          />
        </div>
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
