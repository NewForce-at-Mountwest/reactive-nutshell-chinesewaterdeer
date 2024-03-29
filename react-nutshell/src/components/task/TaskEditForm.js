import React, { Component } from "react";
import TaskManager from "../../modules/TaskManager";

class TaskEditForm extends Component {

    state = {
        name: "",
        date: "",
        summary: "",
        isComplete: false,
        loadingStatus: true,
    };

// Capture input

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

// Update state - With edited data

    updateTask = evt => {
        evt.preventDefault();
        this.setState({ loadingStatus: true });

        const editTask = {
            id: this.props.match.params.taskId,
            name: this.state.name,
            date: this.state.date,
            summary: this.state.summary,
            isComplete: false,
        };

        console.log("Task Edited", editTask)

// Update DB with editted task / Redirect to Tasks

        TaskManager.update(editTask)
            .then(() =>
                this.props.history.push("/tasks")
            );
    };

//  getOne data retrieval - single object to edit (by taskId) / Set State

    componentDidMount() {

        TaskManager.getOne(this.props.match.params.taskId)
            .then(task => {
                this.setState({
                    name: task.name,
                    date: task.date,
                    summary: task.summary,
                    isComplete: false,
                    loadingStatus: false,
                });
            });
    };

// Input Form to edit Task w/ Edit-Submit Button

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <label htmlFor="name">Task Name</label>

                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="name"
                                value={this.state.name}
                            />

                            <label htmlFor="date">Date</label>

                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="date"
                                value={this.state.date}
                            />

                            <label htmlFor="summary">Summary</label>

                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="summary"
                                value={this.state.summary}
                            />
                        </div>

{/* // Edit Submit Button */}

                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.updateTask}


                            >Submit
                            </button>

                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default TaskEditForm;