import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import service from "../api/service";
import { Redirect } from "react-router-dom";

export default class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user:null,
      imageUrl: "",
      redirect: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
    this.getData();
  };

  getData = () => {
    const userId = this.props.match.params.id;
    axios
    .get(`api/profile/user/${userId}`)
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

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState ({
      [name]:value
    })
  };

  handleFileUpload = e => {
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);

    console.log("THIS IS FILE UPLOAD")

    service
      .handleUpload(uploadData)
      .then(response => {
        console.log("THIS IS THE RESPONSE", response);
        this.setState({ imageUrl: response.secure_url });
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
  };

  handleSubmit = async (event) => {

    event.preventDefault();

    const id = this.props.match.params.id;
    console.log(this.props, "PROPS AT EDIT PROFILE", id)

    const firstName = this.state.firstName;
    console.log("NAME: ", firstName)

    const lastName = this.state.lastName;
    console.log("LASTNAME: ", lastName)

    const imageUrl = this.state.imageUrl;
    console.log("PICTURE: ", imageUrl)

      axios
      .put(`/api/profile/user/${id}`, {
        firstName,
        lastName,
        imageUrl
      })
      .then((response) => {
        console.log("PUT METHOD IS DONE", response)
        this.setState({ redirect: `/profile/${this.props.user._id}` });
      })
      .catch(err => {
        console.log("Error while updating the profile: ", err)
      });
    };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="firstName">Name: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />

          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />

          <label htmlFor="imageUrl">Profile Picture: </label>
          <input
            type="file"
            id="imageUrl"
            name="imageUrl"
            // value={this.state.imageUrl}
            onChange={this.handleFileUpload}
          />

          <button type="submit" >Save Changes</button>
        </form>

        <Link to={`/profile/${this.props.user._id}`}>Back</Link>
      </div>
    )
  }
}
