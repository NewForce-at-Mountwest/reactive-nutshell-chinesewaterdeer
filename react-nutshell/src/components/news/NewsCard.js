import React, { Component } from 'react';
import './News.css';



class NewsCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./news.png')} alt="Newspaper" />
          </picture>
          <h3>Title: <span className="card-newsname">{this.props.newsProp.title}</span></h3>
          <p>Synopsis: {this.props.newsProp.synopsis}</p>
          <p>URL: {this.props.newsProp.url}</p>

          <button type="button"
        onClick={() => {this.props.history.push(`/news/${this.props.newsProp.id}/edit`)}}>Edit</button>
        <button type="button" onClick={() => this.props.deleteNewsArticle(this.props.newsProp.id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default NewsCard;