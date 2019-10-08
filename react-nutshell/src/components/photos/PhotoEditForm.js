import React, { Component } from "react"
import PhotoManager from "./PhotoManager"
import "./PhotoForm.css"

class PhotoEditForm extends Component {
    //set the initial state
    state = {
      url: "",
    };
// method for handling change in input field
    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }
// method for updating photo information
    updatePhoto = evt => {
      evt.preventDefault()
      this.setState();
      const editedPhoto = {
        url: this.state.url,
        id: this.props.match.params.photoId
      };

      PhotoManager.update(editedPhoto)
      .then(() => this.props.history.push("/photos"))
    }
//method for posting a photo
    componentDidMount() {
      PhotoManager.get(this.props.match.params.photoId)
      .then(photos => {
          this.setState({
            url: photos.url,
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="url"
                value={this.state.url}
              />
              <label htmlFor="url">Photo URL:</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updatePhoto}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default PhotoEditForm