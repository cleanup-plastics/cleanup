import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import EditProfile from './EditProfile';

export default class Profile extends Component {
  state = {
    user: null,
    editForm: false
  }

  componentDidMount() {
    this.getData();
  };

  getData = () => {
    const userId = this.props.match.params.id;
    console.log(userId)
    axios
    .get(`http://localhost:5005/api/profile/user/${userId}`)
    .then((response) => {
      console.log(response)
      this.setState({
        user: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
  };

  toggleEditForm = () => {
    this.setState((prevState) => ({
    editForm: !prevState.editForm
    }))
  }

  render() {
    console.log(this.props.user.username)
    if (!this.state.user) return <></>;
    else
    return (

      <div>
        <h4>{this.state.user.username}</h4>
        <p>{this.state.user.firstName}</p>
        <p>{this.state.user.lastName}</p>
        <Link to={`/profile/user/${this.props.user._id}`}><button onClick={this.toggleEditForm}>Edit Profile</button></Link>
      </div>
    )
  }
} 