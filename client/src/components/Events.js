import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import EventItem from "./EventItem";
import Map from './Map'

class Events extends Component {

  state = {
    events: [], 
  };


   componentDidMount() {
    this.getData()
    console.log('the event componentdidmount')
  }

  getData = () => {
    axios
      .get("/api/events")
      .then((response) => {
        console.log('response from API')
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

      return (
        <EventItem
          event={event}
          user={userID}
          getData={this.getData}
          key={event._id}
        />
      );
    });
    console.log("state at events.js", this.state.events)


    return (
      <div>
        <h1>Events</h1>

        <button>
          <Link to={"/events/create"}>Create an event!</Link>
        </button>

        <div>{eventList}</div>
        <div><Map events={this.state.events}/></div>
      </div>
    );
  }
}

export default Events;
