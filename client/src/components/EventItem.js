import React, { Component } from "react";
import EventDetails from "./EventDetails";

class EventItem extends Component {
  state = {
    clickedEventId: "",
  };

  toggleEventDetails = (e) => {
    e.preventDefault();
    this.setState(() => ({
      clickedEventId: e.target.eventId.value,
    }));
  };

  render() {
    return (
      <div key={this.props.event._id}>
        <h2>{this.props.event.title}</h2>
        <p>Country: {this.props.event.country}</p>
        <p>City: {this.props.event.city}</p>
        <form onSubmit={this.toggleEventDetails}>
          <input type="hidden" name="eventId" value={this.props.event._id} />
          <button>Show details</button>
        </form>
        {this.state.clickedEventId && <EventDetails event={this.props.event} />}
      </div>
    );
  }
}

export default EventItem;
