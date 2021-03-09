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
        <img src={this.props.event.imageUrl} alt="event" style={{ width: "200px" }}/>
      </div>
    );
  }
}

export default EventDetails;
