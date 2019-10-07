import React, { Component } from 'react';
import { Link } from "react-router-dom";

class TaskCard extends Component {

// Default Card for Tasks

  render() {
    return (
      <div className="card">
        <div className="card-content">

          <picture>
            <img src={require('./imgTask.png')} alt="Task" />
          </picture>

          <h3>: <span className="card-taskname">{this.props.taskProp.name}</span></h3>

          <p>Date: {this.props.taskProp.date}</p>

          <p>Summary of Task: {this.props.taskProp.summary}</p>

{/* // Edit Button */}

          <Link to={`/tasks/${this.props.taskProp.id}/edit`}>

            <button
              onClick= {() => this.props.editTask}

            >Edit Task
            </button>

{/* // Delete Button */}

          </Link>

            <button
              type="checkbox"
              onClick={() => this.props.deleteTask(this.props.taskProp.id)}

            >Delete Task
            </button>

        </div>
      </div>
    );
  }
}

export default TaskCard;