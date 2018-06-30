import React, { Component } from 'react';
import './article.css';

export default class Article extends Component {
  render() {
    return (
      <div id="articleDiv">
        <h3>{this.props.title}</h3>
        <a href={this.props.url}>{this.props.url}</a>
      </div>
    );
  }

}