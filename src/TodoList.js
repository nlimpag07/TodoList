import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.edit = this.edit.bind(this);
  }
  remove(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }
  edit(id) {
    const updateTodo = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.isEdit = true;
      }
      return todo;
    });
    this.setState({
      ...this.state,
      todos: updateTodo,
    });

  }
  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }
  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        tname={`todo-${todo.id}`}
        todoname={todo.todoname}
        isDisabled={ todo.isEdit ? false : true }
        edit={() => this.edit(todo.id)}
        removeTodo={() => this.remove(todo.id)}
      />
    ));
    return (
      <div className="Boxlist">
        <div>
          <h1>Todo List</h1>
          {todos}
          <TodoForm createTodo={this.create} />
        </div>
      </div>
    );
  }
}
export default TodoList;
