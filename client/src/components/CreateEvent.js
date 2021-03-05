import React, { Component } from "react";
// import CountriesDropdown from "./CountriesDropdown";
import axios from "axios";
import countries from "../countries.json";
import service from "../api/service"

class CreateEvent extends Component {
  state = {
    title: "",
    description: "",
    // image: "",
    imageUrl:"",
    //where to use cloudinary method?
    // imagePath: "",
    // imageName: "",
    //use userID?
    //owner: userID,
    location: "",
    street: "",
    city: "",
    country: "",
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("changed event:", name);

    this.setState({
      [name]: value,
    });
  };

  handleFileUpload = e => {
    console.log('The file to be uploaded is: ', e.target.files[0]);
 
    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append('imageUrl', e.target.files[0]);
 
    service
      .handleUpload(uploadData)
      .then(response => {
        // console.log('response is: ', response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ imageUrl: response.secure_url });
      })
      .catch(err => {
        console.log('Error while uploading the file: ', err);
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    service
      .createEvent(this.state)
      .then(res => {
        console.log('added: ', res);
        // here you would redirect to some other page
      })
      .catch(err => {
        console.log('Error while adding the thing: ', err);
      });

    axios
      .post("/api/events", {
        title: this.state.title,
        description: this.state.description,
        imageUrl: this.state.imageUrl,
        location: this.state.location,
        street: this.state.street,
        city: this.state.city,
        country: this.state.country,
      })
      .then(() => {
        this.setState({
          title: "",
          description: "",
          imageUrl: "",
          location: "",
          street: "",
          city: "",
          country: "",
        });
      });
  };

  render() {
    console.log(this.state);

    const countryOptions = countries.map((country) => {
      return (
        <option value={country} key={country}>
          {country}
        </option>
      );
    });

    return (
      <div>
        <h1>Create a new Event!</h1>

        <form onSubmit={event => this.handleSubmit(event)}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />

          <label htmlFor="description">Description: </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="8"
            value={this.state.description}
            onChange={this.handleChange}
          ></textarea>

          <label htmlFor="image">Image: </label>
          <input
            type="file"
            id="image"
            name="image"
            // value={this.state.image}
            onChange={e => this.handleFileUpload(e)}
          />

          <label htmlFor="location">Name of location: </label>
          <input
            type="text"
            id="location"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
          />

          <label htmlFor="street">Street: </label>
          <input
            type="text"
            id="street"
            name="street"
            value={this.state.street}
            onChange={this.handleChange}
          />
          <label htmlFor="city">City: </label>
          <input
            type="text"
            id="city"
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
          />

          <label htmlFor="country">Country: </label>
          <select
            name="country"
            id="country"
            value={this.state.country}
            onChange={this.handleChange}
          >
            <option value="">All</option>
            {countryOptions}
          </select>

          {/* refer to long list of option values in another component: */}
          {/* <CountriesDropdown /> */}

          <button type="submit">Post this event!</button>
        </form>
      </div>
    );
  }
}

export default CreateEvent;
