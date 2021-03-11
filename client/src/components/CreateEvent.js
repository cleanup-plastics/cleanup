import React, { Component } from "react";
import axios from "axios";
import countries from "../countries.json";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import service from "../api/service"

class CreateEvent extends Component {
  state = {
    title: "",
    description: "",
    imageUrl:"",
    //use userID?
    //owner: userID,
    time: "",
    date: "",
    location: "",
    street: "",
    city: "",
    country: "",
    redirect: null,
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  };

  handleFileUpload = e => {
    //console.log('The file to be uploaded is: ', e.target.files[0]);
 
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

    // service
    //   .createEvent(this.state)
    //   .then(res => {
    //     console.log('added: ', res);
    //     // here you would redirect to some other page
    //   })
    //   .catch(err => {
    //     console.log('Error while adding the thing: ', err);
    //   });

    axios
      .post("/api/events", {
        title: this.state.title,
        description: this.state.description,
        imageUrl: this.state.imageUrl,
        location: this.state.location,
        street: this.state.street,
        city: this.state.city,
        time: this.state.time,
        date: this.state.date,
        country: this.state.country,
        owner: this.props.user._id
      })
      .then(() => {
        this.setState({
          title: "",
          description: "",
          time: "",
          date: "",
          imageUrl: "",
          location: "",
          street: "",
          city: "",
          country: "",
        });
      })
      .then(() => {
        this.setState({ redirect: "/events" });
      });
  };

  render() {
    console.log('logging the props: ', this.props.user._id);
    
    const countryOptions = countries.map((country) => {
      return (
        <option value={country} key={country}>
          {country}
        </option>
      );
    });

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    return (
      <div className="containerHoriz">
        <h1>Create a new event!</h1>

        <form className="f-form eventform" onSubmit={event => this.handleSubmit(event)}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            required
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
            required
          ></input>

          <label htmlFor="time">Time: </label>
          <input
            type="time"
            id="time"
            name="time"
            value={this.state.time}
            onChange={this.handleChange}
            required
          ></input>

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

          <button className="profileBtn" type="submit">Post this event!</button>
        </form>

        <Link to={"/events"}>Back to events</Link>
      </div>
    );
  }
}

export default CreateEvent;
