import React, { Component } from 'react';
import { connect } from 'react-redux';
import { validateUser } from '../actions';

class Login extends Component{

  constructor(props){
    super(props);
    this.state={username:"",password:""}
  }

  onSubmit = (event) => {
    //check if username exists
    event.preventDefault();
    let user = {username:this.state.username, password:this.state.password}
    this.props.validateUser(user,() => {
      this.props.history.push('/success');
    });
  }

  onUserNameChange = (event) => {
    this.setState({username:event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password:event.target.value})
  }

   render(){
     const { user } = this.props;
     return (
       <div className="form">
       <h4>Login Form</h4>
       <form className="login-form" onSubmit={this.onSubmit}>
          <div className="error"> {user.errorMessage}</div>
          <input type="text" id="username" value={this.state.username}
          placeholder="username" onChange={this.onUserNameChange} autoCorrect="off" autoCapitalize="off" spellCheck="false" required/>
          <input id="password" type="password" value={this.state.password}
           placeholder="password"  onChange={this.onPasswordChange} required/>
          <button className="btn btn-primary" type="submit">Login</button>
      </form>
      </div>
     )

   }

}

function mapStateToProps({ login }) {
  return { user: login};
}

export default connect(mapStateToProps, { validateUser })(Login);
