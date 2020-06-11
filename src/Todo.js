import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.tname,
      value: this.props.todoname,
      edit: false,
    };
    this.save = this.save.bind(this);
  }
  
  save(evt) {
    this.setState({
      ...this.state,
      value: document.getElementById(this.props.id).value,
      edit: true
    });
    
  }
  render() {
    return (
      <div className="Todo">
        <input
          type="text"
          name={this.props.tname}
          id={this.props.id}
          defaultValue={this.state.value}
          disabled={this.props.isDisabled || this.state.edit === true ? true : false}
        />
        {this.props.isDisabled || this.state.edit === true ? (
          <button onClick={this.props.edit}>Edit</button>
        ) : (
          <button onClick={this.save}>Save</button>
        )}

        <button onClick={this.props.removeTodo}>Remove</button>
      </div>
    );
  }
}
export default Todo;
