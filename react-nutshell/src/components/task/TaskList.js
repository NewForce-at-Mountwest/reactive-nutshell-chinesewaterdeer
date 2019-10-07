import React, { Component } from "react";
import TaskCard from "../task/TaskCard";
import TaskManager from "../../modules/TaskManager";


class TaskList extends Component {

    state = {

        tasks: []

    };

    deleteTask = (id) => {
        TaskManager.delete(id)
            .then(TaskManager.getAll)
            .then(parsedTasks => {
                this.setState({
                    tasks: parsedTasks
                })
            })
    }

    componentDidMount() {
        console.log("TASK LIST: componentDidMount");

        TaskManager.getAll().then(tasksDB => {
            console.log(tasksDB);
                this.setState({

                    tasks: tasksDB

                });
        });
    }

    render () {
        console.log("TASK LIST: render");

            return (
                <>
                 <section className="section-content">

                     <button
                        type="button"
                        className="btn"
                        onClick={() => {
                            this.props.history.push("/tasks/new");
                        }}
                    >New Task
                    </button>

                 </section>

                 <div className="container-cards">
                     {this.state.tasks.map(singleTask => (
                         <TaskCard
                            key={singleTask.id}
                            deleteTask={this.deleteTask}
                            taskProp={singleTask} />
                     ))}
                 </div>

                </>
            );
    }
}

export default TaskList