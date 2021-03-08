import React, { Component } from 'react'
import serviceProfile from "../api/serviceProfile";
import axios from 'axios';

export default class EditProfile extends Component {

  state = {
    firstName: "",
    lastName: "",
    imagePath: "",
    redirect: null
  }

  handleFileUpload = e => {
    console.log('The file to be uploaded is: ', e.target.files[0]);
 
    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append('imagePath', e.target.files[0]);
 
    serviceProfile
      .handleUpload(uploadData)
      .then(response => {
        // console.log('response is: ', response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ imagePath: response.secure_url });
      })
      .catch(err => {
        console.log('Error while uploading the file: ', err);
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    serviceProfile
      .updateProfile(this.state)
      .then(res => {
        console.log('added: ', res);
        // here you would redirect to some other page
      })
      .catch(err => {
        console.log('Error while adding the thing: ', err);
      })
      axios
      .put(`/api/profile/user/${this.props.user_id}`, {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        imagePath: this.state.imagePath
      })
      .then(() => {
        this.setState({
          firstName: "",
          lastName: "",
          imagePath: ""
        });
      })
      .then(() => {
        this.setState({ redirect: `/profile/${this.props.user._id}` });
      });
    }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
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
          <label htmlFor="imagePath">Profile Picture: </label>
          <input
            type="file"
            id="imagePath"
            name="imagePath"
            value={this.props.imagePath}
            onChange={this.props.handleChange}
          />
          <button type='submit'>Save Changes</button>
        </form>
      </div>
    )
  }
}
