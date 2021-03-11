
import React, { Component } from 'react';
import { login } from '../services/auth';
import './Signup.css'


export default class Login extends Component {

  state = {
    username: '',
    password: '',
    message: ''
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    login(username, password)
      .then(user => {
        if (user.message) {
          this.setState({
            message: user.message,
            username: '',
            password: ''
          })
        } else {
          console.log('frontent used', user)
          // put the user object in the state of App.js
          this.props.setUser(user);
          this.props.history.push('/events');
        }
      })
      .catch(err=> console.log(err))
  }
  render() {
    return (
      <div className="user">
        <header className="user__header">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg" alt="" />
        <h2 className="user__title">Login</h2>
    </header>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <div className="signup-form__group">
          <input
            className="signup-form__input"
            placeholder= "Username"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            id="username"
          />
          </div>
          <div className="signup-form__group">
          <input
            placeholder="password"
            className="signup-form__input"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            id="password"
          />
          </div>
          <button className="btn-signup" type="submit">Log in</button>
          {this.state.message && (
            <h3>{this.state.message}</h3>
          )}
        </form>
      </div>
    )
  }
}
