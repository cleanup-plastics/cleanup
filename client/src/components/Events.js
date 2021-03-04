import React, { Component } from "react";
import axios from "axios";

class Events extends Component {
  state = {
    events: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData =  () => {
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

  render() {
    const eventList = this.state.events.map((event) => {
      return (
        <div key={event._id}>
          <h2>{event.title}</h2>
          <p>Country: {event.country}</p>
          <p>City: {event.city}</p>
        </div>
      );
    });

    return (
      <div>
        <h1>Events</h1>
        {eventList}
      </div>
    );
  }
}

export default Events;
