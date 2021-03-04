import React, { Component } from "react";
// import CountriesDropdown from "./CountriesDropdown";

class CreateEvent extends Component {
  state = {
    title: "",
    description: "",
    imagePath: "",
    imageName: "",
    //use userID?
    //owner: userID,
    location: "",
    street: "",
    city: "",
    country: "",
    //should we include the coordinates in the form?
    coordinates: [Number],
  };

  onChange = () => {};

  handleSubmit = () => {};

  render() {
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
            rows="10"
            value={this.state.description}
            onChange={this.handleChange}
          ></textarea>

          {/* Image --> how to name imagepath and imagename in state/cloudinary? */}

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

          {/* refer to long list of option values in another component: */}
          {/* <CountriesDropdown /> */}

          <button type="submit">Post this event!</button>
        </form>
      </div>
    );
  }
}

export default CreateEvent;
