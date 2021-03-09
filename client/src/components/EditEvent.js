import React, { Component } from "react";
import axios from "axios";
import countries from "../countries.json";
import { Link } from "react-router-dom";
import service from "../api/service";
import { Redirect } from "react-router-dom";

class EditEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event: null,
      redirect: null,
      imageUrl: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const eventID = this.props.match.params.id;
    axios
      .get(`/api/events/${eventID}`)
      .then((response) => {
        //console.log("response from GET:", response.data);
        this.setState({
          event: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    let newState = this.state.event;
    newState[name] = value;
    this.setState({
      event: newState,
    });
  };

  handleFileUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);

    console.log('hello from UPLOAD!')
    service
      .handleUpload(uploadData)
      .then((response) => {
        console.log("hello from response!", response);
        //const imageUrl = this.state.event.imageUrl;
        this.setState({ imageUrl: response.secure_url });
      })
      .catch((err) => {
        console.log("Error while uploading the file: ", err);
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();

        const eventID = this.props.match.params.id;

    const {
      title,
      date,
      time,
      description,
      location,
      street,
      city,
      country,
    
    } = this.state.event;
    const imageUrl = this.state.imageUrl;
    console.log('imageurl:', imageUrl)

    axios
      .put(`http://localhost:5005/api/events/${eventID}`, {
        title,
        date,
        time,
        description,
        location,
        street,
        city,
        country,
        imageUrl
      })
      .then(() => {
        console.log("axios put is done");
        console.log("the STATE AFTER PUT", this.state.event);
        this.setState({ redirect: "/events" });
      })
      .catch((err) => {
        console.log("Error while updating the event: ", err);
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

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    if (!this.state.event) return <></>;
    else
      return (
        <div>
          <h1>Edit this event:</h1>

          <form onSubmit={(event) => this.handleSubmit(event)}>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id="title"
              name="title"
              value={this.state.event.title}
              onChange={this.handleChange}
              required
            />

            <label htmlFor="description">Description: </label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="8"
              value={this.state.event.description}
              onChange={this.handleChange}
            ></textarea>

            <label htmlFor="date">Date: </label>
            <input
              type="date"
              id="date"
              name="date"
              value={this.state.event.date}
              onChange={this.handleChange}
              required
            ></input>

            <label htmlFor="time">Time: </label>
            <input
              type="time"
              id="time"
              name="time"
              value={this.state.event.time}
              onChange={this.handleChange}
              required
            ></input>

            <label htmlFor="image">Image: </label>
            <input
              type="file"
              id="image"
              name="image"
              // value={this.state.image}
              onChange={(e) => this.handleFileUpload(e)}
            />

            <label htmlFor="location">Name of location: </label>
            <input
              type="text"
              id="location"
              name="location"
              value={this.state.event.location}
              onChange={this.handleChange}
            />

            <label htmlFor="street">Street: </label>
            <input
              type="text"
              id="street"
              name="street"
              value={this.state.event.street}
              onChange={this.handleChange}
            />
            <label htmlFor="city">City: </label>
            <input
              type="text"
              id="city"
              name="city"
              value={this.state.event.city}
              onChange={this.handleChange}
            />

            <label htmlFor="country">Country: </label>
            <select
              name="country"
              id="country"
              value={this.state.event.country}
              onChange={this.handleChange}
            >
              <option value="">All</option>
              {countryOptions}
            </select>

            <button type="submit">Edit</button>
          </form>

          <Link to={"/events"}>Back to events</Link>
        </div>
      );
  }
}

export default EditEvent;
