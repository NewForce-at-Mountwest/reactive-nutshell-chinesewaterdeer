import React, { Component } from 'react';
import { Link } from "react-router-dom";

class TaskCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">

          <picture>
            <img src={require('./imgTask.png')} alt="Task" />
          </picture>

          <h3>: <span className="card-petname">{this.props.taskProp.name}</span></h3>

          <p>Breed: {this.props.animalProp.breed}</p>

          <Link to={`/animals/${this.props.animalProp.id}`}>

            <button>Details</button>

          </Link>

          <Link to={`/animals/${this.props.animalProp.id}/edit`}>

            <button>Edit</button>

          </Link>
        </div>
      </div>
    );
  }
}

export default TaskCard;