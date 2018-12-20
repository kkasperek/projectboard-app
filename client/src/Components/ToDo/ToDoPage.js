import React, { Component } from "react";
import AddForm from "./AddForm";
import TodoItems from "./ToDoItems";
import ProjectContainer from "./ProjectContainer";
import API from "../../utils/API";

class ToDoPage extends Component {
  inputElement = React.createRef();
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    };
  }
  componentDidMount(){
   
  }
  // Load all tasks saved
  loadItems = () => {
    API.getProjects()
    .then(res => 
      this.setState({items: res.data})
    )
  }
  // Delete Item
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems
    });
  };
  // Handle form input
  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({
      currentItem
    });
  };
  // Add new item to todo list
  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: "", key: "" }
      });
    }
  };
  render() {
    return (
      <div className="App container">
        <h2>Track your Progress</h2>
        <AddForm
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <div className="row">
        <ProjectContainer heading="To Do">
            <TodoItems entries={this.state.items} deleteItem={this.deleteItem} /> 
        </ProjectContainer>
         <ProjectContainer heading="In Progress"/>
         <ProjectContainer heading="Complete"/>
        </div>
      </div>
    );
  }
}

export default ToDoPage;
