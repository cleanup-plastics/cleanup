import React, { Component } from "react";
// import CountriesDropdown from "./CountriesDropdown";
import axios from "axios";
import countries from "../countries.json";

class CreateEvent extends Component {
  state = {
    title: "",
    description: "",
    image: "",
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

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/events", {
        title: this.state.title,
        description: this.state.description,
        image: this.state.image,
        location: this.state.location,
        street: this.state.street,
        city: this.state.city,
        country: this.state.country,
      })
      .then(() => {
        this.setState({
          title: "",
          description: "",
          image: "",
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

        <form onSubmit={this.handleSubmit}>
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
            value={this.state.image}
            onChange={this.handleChange}
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
