import React, { Component } from "react";

class AddForm extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus();
  }
  render() {
    return (
      <div className="todoListMain">
        <form onSubmit={this.props.addItem}>
          <div className="input-field inline">
            <input
              placeholder="Type here..."
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Add Task
          </button>
        </form>
      </div>
    );
  }
}

export default AddForm;
