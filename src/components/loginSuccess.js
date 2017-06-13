import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LoginSuccess extends Component {

  constructor(props){
      super(props);
  }

  render () {
    return (
      <div className="container">
        <h4> Login Successful </h4>
      <div className="logOutBtn">  <Link className="btn btn-primary" to="/">
          Log Out
          </Link> </div>
      </div>
    )
  }

}
