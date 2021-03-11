import React, { Component } from 'react'
import { signup } from '../services/auth';
import './Signup.css'
import { Link } from "react-router-dom";

export default class Signup extends Component {

  state = {
    username: '',
    email: '',
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
    const { username, email, password } = this.state;
    signup(username, email, password)
      .then(user => {
        if (user.message) {
          this.setState({
            message: user.message,
            username: '',
            email: '',
            password: ''
          })
        } else {
          console.log(user)
           // put the response from the server in the state of App.js
          this.props.setUser(user);
          //redirect the logged in user to the events page
          this.props.history.push('/events');
        }
      })
  }

  render() {
    return (
      <div className="user">
    <header className="user__header">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg" alt="" />
        <h2 className="user__title">Signup</h2>
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
            placeholder="eMail"
            className="signup-form__input"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            id="email"
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
          <button className="btn-signup" type="submit">Create an Account</button>
          {this.state.message && (
            <h3>{this.state.message}</h3>
          )}
        </form>
        <div><p className="login-link">Already a plastic hater? <Link className="link-login" to={"/login"}>Log in</Link></p></div>
      </div>
    )
  }
}