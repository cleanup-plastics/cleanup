import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import EventItem from "./EventItem";

class Events extends Component {
  state = {
    events: [], 
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


  render() {
    // console.log('logging props:', this.props.user._id)

    const userID = this.props.user._id;

    const eventList = this.state.events.map((event) => {
      console.log('logging the event:', event)
      return (
        <EventItem event={event} user={userID} props={this.props} getData={ this.getData}/>
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
