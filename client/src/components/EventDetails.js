import React, { Component } from "react";

class EventDetails extends Component {
  render() {
    console.log('logging time:', this.props.event);
    return (
      <div>
        <p>{this.props.event.description}</p>
        <p>Date: {this.props.event.date}</p>
        <p>Time: {this.props.event.time}</p>
        <p>Location: {this.props.event.location}</p>
        <p>Street: {this.props.event.street}</p>
        <p>{this.props.event.image}</p>
      </div>
    );
  }
}

export default EventDetails;
