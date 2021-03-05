import React, { Component } from "react";
import EventDetails from "./EventDetails";

class EventItem extends Component {
  state = {
    clickedEventId: "",
    toggled: false,
  };

  toggleEventDetails = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      clickedEventId: e.target.eventId.value,
      toggled: !state.toggled,
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
          {this.state.toggled ? (
            <button>Hide details</button>
          ) : (
            <button>Show details</button>
          )}
        </form>
        {this.state.toggled && <EventDetails event={this.props.event} />}
      </div>
    );
  }
}

export default EventItem;
