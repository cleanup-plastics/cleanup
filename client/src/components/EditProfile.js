import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import serviceProfile from "../api/serviceProfile";
// Could import redirect

export default class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user:null,
      // firstName: "",
      // lastName: "",
      // imagePath: "",
      // redirect: null
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
    // console.log(userId)
    // console.log(this.props)
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
    uploadData.append("imagePath", e.target.files[0]);

    console.log("THIS IS FILE UPLOAD")

    serviceProfile
      .handleUpload(uploadData)
      .then(response => {
        console.log("THIS IS THE RESPONSE", response);
        this.setState({ imagePath: response.secure_url });
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
  };

  handleSubmit = async (user) => {
    user.preventDefault();

    const id = this.props.match.params.id;
    console.log(this.props, "props at FE editprofile", id)
    // const {
    //   firstName,
    //   lastName
    // } = this.state.user;
    const firstName = this.state.firstName;
    console.log("NAME: ", firstName)
    const lastName = this.state.lastName;
    console.log("LASTNAME: ", lastName)
    const imagePath = this.state.imagePath;
    console.log("PICTURE: ", imagePath)

    // serviceProfile
    //   .updateProfile(this.state)
    //   .then(res => {
    //     console.log("added: ", res);
    //     // here you would redirect to some other page
    //   })
    //   .catch(err => {
    //     console.log("Error while adding the thing: ", err);
    //   });
    // let request = await axios.put(`/api/profile/user/${this.props.user_id}`, {
      
    //   firstName,
    //   lastName,
    //   imagePath
    // })
      axios
      .put(`http://localhost:5005/api/profile/user/${id}`, {
        // firstName: this.state.firstName,
        // lastName: this.state.lastName,
        // imagePath: this.state.imagePath
        firstName,
        lastName,
        imagePath
      })
      .then((response) => {
        console.log("PUT METHOD IS DONE", this.state.user)
        this.setState({ redirect: `/profile/${this.props.user._id}` });
      })
      .catch(err => {
        console.log("Error while updating the profile: ", err)
      });
    };

  render() {
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

          <label htmlFor="imagePath">Profile Picture: </label>
          <input
            type="file"
            id="imagePath"
            name="imagePath"
            value={this.state.imagePath}
            onChange={this.handleFileUpload}
          />

          <button type="submit" >Save Changes</button>
        </form>

        <Link to={"/profile/user/"}>Back</Link>
      </div>
    )
  }
}
