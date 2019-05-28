//Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets

class Articles extends Component {
  static propTypes = {
        body: PropTypes.object.isRequiered,
  }
  render() {
    const { body } = this.props;

    return (
      <div className="Articles">
      {body}
      </div>
    );
  }
}

export default Articles;