import React, { Component } from "react";
import axios from "axios";
import countries from "../countries.json";
import { Link } from "react-router-dom";

class CreateEvent extends Component {
  state = {
    title: "",
    description: "",
    image: "",
    //use userID?
    //owner: userID,
    time: "",
    date: "",
    location: "",
    street: "",
    city: "",
    country: "",
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log("changed event:", name);

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
        time: this.state.time,
        date: this.state.date,
        country: this.state.country,
      })
      .then(() => {
        this.setState({
          title: "",
          description: "",
          image: "",
          time: "",
          date: "",
          location: "",
          street: "",
          city: "",
          country: "",
        });
      });
  };

  render() {

    const countryOptions = countries.map((country) => {
      return (
        <option value={country} key={country}>
          {country}
        </option>
      );
    });

    return (
      <div>
        <h1>Create a new event!</h1>

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

          <label htmlFor="date">Date: </label>
          <input
            type="date"
            id="date"
            name="date"
            value={this.state.date}
            onChange={this.handleChange}
          ></input>

          <label htmlFor="time">Time: </label>
          <input
            type="text"
            id="time"
            name="time"
            placeholder="use format 14:00"
            value={this.state.time}
            onChange={this.handleChange}
          ></input>

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

          <button type="submit">Post this event!</button>
        </form>

        <Link to={"/events"}>Back to events</Link>
      </div>
    );
  }
}

export default CreateEvent;
