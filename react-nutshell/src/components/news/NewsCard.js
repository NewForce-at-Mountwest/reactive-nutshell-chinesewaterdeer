import React, { Component } from 'react';

class NewsCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture> */}
          <h3>Title: <span className="card-newsname">Article #1</span></h3>
          <p>Synopsis: Lorem Ipsum</p>
        </div>
      </div>
    );
  }
}

export default NewsCard;