import React, { Component } from "react";

class EventDetails extends Component {
  render() {
    return (
      <div>
        <p>{this.props.event.description}</p>
        <p>Location: {this.props.event.location}</p>
        <p>{this.props.event.street}</p>
        <p>{this.props.event.time}</p>
        <p>{this.props.event.date}</p>
        <p>{this.props.event.image}</p>
      </div>
    );
  }
}

export default EventDetails;
