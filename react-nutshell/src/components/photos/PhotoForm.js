import React, { Component } from 'react';
import PhotoManager from './PhotoManager';
import './PhotoForm.css';

class PhotoForm extends Component {
    state = {
        url: "",
        loadingStatus: false,
    };
// method for handling field change in state
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };


    /*  Local method for validation, set loadingStatus, create news object, invoke the NewsManager post method, and redirect to the full news list
    */
    newPhoto = evt => {
        evt.preventDefault();
        if (this.state.url === "") {
            window.alert("Please import an image!");
        } else {
            this.setState({ loadingStatus: true });
            const photos = {
                url: this.state.url,
                userId: 1,

            };

            // Create the article and redirect user to news list
            PhotoManager.post(photos)
                .then(() => this.props.history.push("/photos"));
        }
    };
// rendering for use in /photos
    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <label htmlFor="url">URL</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="url"
                                placeholder="image url"
                            />
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.newPhoto}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default PhotoForm;