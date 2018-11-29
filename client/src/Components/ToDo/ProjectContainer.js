import React, { Component } from "react";

class ProjectContainer extends Component {
  
  render() {
    return (
      <div className="col s4 ProjectContainer">
        <h4 className="task-box-title">{this.props.heading}</h4>
        <div>
          {this.props.children}
          {this.projectTitle}

        </div>
      </div>
    );
  }
}

export default ProjectContainer;
