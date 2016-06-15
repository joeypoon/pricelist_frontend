import React from 'react';

export default class Home extends React.Component {
  render() {
    return <div className="home absolute flex-center">
      <div className="intro">
        <h1>Pricelist</h1>
        <p>Grocery price tracker.</p>
        <i className="zmdi zmdi-trending-up"></i>
      </div>
    </div>
  }
}