import React, { Component } from 'react';
import NewsManager from '../../modules/NewsManager';
import './NewsForm.css';

class NewsForm extends Component {
    state = {
        title: "",
        synopsis: "",
        url: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };


    /*  Local method for validation, set loadingStatus, create news object, invoke the NewsManager post method, and redirect to the full news list
    */
    constructNewNewsArticle = evt => {
        evt.preventDefault();
        if (this.state.title === "" || this.state.synopsis === "") {
            window.alert("Please input a news title and synopsis!");
        } else {
            this.setState({ loadingStatus: true });
            const news = {
                title: this.state.title,
                synopsis: this.state.synopsis,
                url: this.state.url,
                active: true,
                userId: 1,

            };

            // Create the article and redirect user to news list
            NewsManager.post(news)
                .then(() => this.props.history.push("/news"));
        }
    };

    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="title"
                                placeholder="Article title"
                            />
                            <label htmlFor="synopsis">Synopsis</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="synopsis"
                                placeholder="Article synopsis"
                            />
                            <label htmlFor="url">URL</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="url"
                                placeholder="Article url"
                            />
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewNewsArticle}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default NewsForm