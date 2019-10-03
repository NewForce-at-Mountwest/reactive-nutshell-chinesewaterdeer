import React, { Component } from "react"
import NewsManager from "../../modules/NewsManager"
import "./NewsForm.css"

class NewsEditForm extends Component {
    //set the initial state
    state = {
      title: "",
      synopsis: "",
      url: "",
      user: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingNewsArticle = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedNewsArticle = {
        id: this.props.match.params.newId,
        title: this.state.title,
        synopsis: this.state.synopsis,
        url: this.state.url,
        userId: 1,
        active: true
      };

      NewsManager.update(editedNewsArticle)
      .then(() => this.props.history.push("/news"))
    }

    componentDidMount() {
      NewsManager.get(this.props.match.params.newId)
      .then(newsArticle => {
          this.setState({
            title: newsArticle.title,
            synopsis: newsArticle.synopsis,
            url: newsArticle.url,
            user: newsArticle.userId,
            active: true,
            loadingStatus: false,

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
                id="title"
                value={this.state.title}
              />
              <label htmlFor="title">Article Title:</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="synopsis"
                value={this.state.synopsis}
              />
              <label htmlFor="synopsis">Article Synopsis:</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="url"
                value={this.state.url}
              />
              <label htmlFor="url">Article URL:</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingNewsArticle}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default NewsEditForm