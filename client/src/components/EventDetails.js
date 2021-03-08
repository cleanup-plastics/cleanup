import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class EventDetails extends Component {
  state = {
    redirect: null,
  };

  deleteEvent = () => {
    const eventID = this.props.event._id;
    axios
      .delete(`/api/events/${eventID}`)
      .then(() => {
        this.props.props.props.history.push("/events");
      })
      .then(() => {
        this.setState({ redirect: "/events" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log("logging props:", this.props.props.props.history);

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    return (
      <div>
        <p>{this.props.event.description}</p>
        <p>Date: {this.props.event.date}</p>
        <p>Time: {this.props.event.time}</p>
        <p>Location: {this.props.event.location}</p>
        <p>Street: {this.props.event.street}</p>
        <img
          src={this.props.event.imageUrl}
          alt="event"
          style={{ width: "200px" }}
        />
        {this.props.userID === this.props.event.owner && (
          <div>
            <button>Edit</button>
            <button onClick={this.deleteEvent}>Delete</button>
          </div>
        )}
      </div>
    );
  }
}

export default EventDetails;
