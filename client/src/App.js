import React, { Component } from "react";
import "./App.css";
import API from "./utils/API";
import ToDoPage from "./Components/ToDo";

class App extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <div className="App container">
        <ToDoPage />
      </div>
    );
  }
}

export default App;
