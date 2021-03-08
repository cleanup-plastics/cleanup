import React, { Component } from 'react'

export default class EditProfile extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          {/* <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={this.props.username}
            onChange={this.props.handleChange}
          /> */}
          <label htmlFor="firstName">Name: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={this.props.firstName}
            onChange={this.props.handleChange}
          />
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={this.props.lastName}
            onChange={this.props.handleChange}
          />
          <label htmlFor="image">Profile Picture: </label>
          <input
            type="file"
            id="image"
            name="image"
            value={this.props.imagePath}
            onChange={this.props.handleChange}
          />
          <button type='submit'>Save Changes</button>
        </form>
      </div>
    )
  }
}
