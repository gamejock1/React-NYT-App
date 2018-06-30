import React, { Component } from 'react';
import './panel.css';

class Panel extends Component {

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">{this.props.panelHeading}</div>
        <div className="panel-body">{this.props.children}</div>
      </div>
    );
  }
}

export default Panel;
