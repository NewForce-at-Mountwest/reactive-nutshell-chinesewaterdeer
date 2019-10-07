import React, { Component } from "react";
import TaskCard from "../task/TaskCard";
import TaskManager from "../../modules/TaskManager";


class TaskList extends Component {

    state = {

        tasks: [],
        isComplete: ""

    };

// Soft Delete Task (by ID), Task Manager retrieves updated DB after deletion.

    softDeleteTask = (id) => {
        TaskManager.softDelete(id)
            .then(TaskManager.getAll)
            .then(parsedTasks => {
                this.setState({
                    tasks: parsedTasks
                })
            })
    }

// Task DB retrieval

    componentDidMount() {
        console.log("TASK LIST: componentDidMount");

        TaskManager.getAll().then(tasksDB => {
            console.log(tasksDB);
                this.setState({

                    tasks: tasksDB

                });
        });
    }

// Task List

    render () {
        console.log("TASK LIST: render");

            return (
                <>
                 <section className="section-content">

{/* // New Task Button */}

                     <button
                        type="button"
                        className="btn"
                        onClick={() => {
                            this.props.history.push("/tasks/new");
                        }}
                    >New Task
                    </button>

                 </section>

{/* // Render individual task card if task not completed  */}

                 <div className="container-cards">
                     {this.state.tasks.map(singleTask =>
                     !singleTask.isComplete ? (
                         <TaskCard
                            key={singleTask.id}
                            softDeleteTask={this.softDeleteTask}
                            taskProp={singleTask} />
                     ) : (
                         null
                     )

                     )}
                 </div>

                </>
            );
    }
}

export default TaskList