/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MainBodyFrame extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <main>Main body frame goes here</main>
      </div>
    );
  }
}
