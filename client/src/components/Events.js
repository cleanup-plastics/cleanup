import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EventDetails from "./EventDetails";

class Events extends Component {
  state = {
    events: [],
    showDetails: false,
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get("/api/events")
      .then((response) => {
        this.setState({
          events: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  toggleEventDetails = () => {
    this.setState((state) => ({
      showDetails: !state.showDetails,
    }));
  };

  render() {
    const eventList = this.state.events.map((event) => {
      return (
        <div key={event._id}>
          <h2>{event.title}</h2>
          <p>Country: {event.country}</p>
          <p>City: {event.city}</p>
          <button onClick={this.toggleEventDetails}>Show details</button>
          {this.state.showDetails && <EventDetails {...this.state} />}
        </div>
      );
    });

    return (
      <div>
        <h1>Events</h1>

        <button>
          <Link to={"/events/create"}>Create an event!</Link>
        </button>

        <div>{eventList}</div>
      </div>
    );
  }
}

export default Events;
