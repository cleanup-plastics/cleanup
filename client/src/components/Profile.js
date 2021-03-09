import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import EditProfile from './EditProfile';

export default class Profile extends Component {
  state = {
    editForm: false
  }

  toggleEditForm = () => {
    this.setState((prevState) => ({
    editForm: !prevState.editForm
    }))
  }

  render() {
    console.log(this.props.user.username)
    return (
      <div>
        <h4>{this.props.user.username}</h4>
        <Link to={`/profile/user/${this.props.user._id}`}><button onClick={this.toggleEditForm}>Edit Profile</button></Link>
      </div>
    )
  }
} 