import React, { Component } from 'react';
import TaskManager from '../../modules/TaskManager';

class TaskForm extends Component {

    state = {

        name: "",
        date: "",
        summary: "",
        isComplete: false,
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewTask = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.date === "") {
            window.alert("Please input a task name and date.");
        } else {
            this.setState({ loadingState: true});
            const task = {
                name: this.state.name,
                date: this.state.date,
                summary: this.state.summary,
                isComplete: false,
            };

            TaskManager.post(task)
                .then(() => this.props.history.push("/tasks"));
        }
    };

    render() {

        return(
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">

                            <label htmlFor="taskName">Name</label>
                                <input
                                    type="text"
                                    required
                                    onChange={this.handleFieldChange}
                                    id="name"
                                    placeholder="Task Name"
                                />

                            <label htmlFor="date">Date</label>
                                <input
                                    type="text"
                                    required
                                    onChange={this.handleFieldChange}
                                    id="date"
                                    placeholder="Date"
                                />

                            <label htmlFor="summary">Summary</label>
                                <input
                                    type="text"
                                    required
                                    onChange={this.handleFieldChange}
                                    id="summary"
                                    placeholder="Summary of Task"
                                />

                        </div>

                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewTask}

                            > Submit
                            </button>
                        </div>
                    </fieldset>
                </form>
            </>
        )

    }

}

export default TaskForm

