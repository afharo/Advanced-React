import React, { Component } from 'react';
import Home from './Home';
import Meta from './Meta';

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Home />
        {this.props.children}
      </div>
    );
  }
}

export default Page;