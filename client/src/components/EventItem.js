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
      <div>
        <h2>{this.props.event.title}</h2>
        <p>
          <strong> Country: </strong>
          {this.props.event.country}
        </p>
        <p>
          <strong> City: </strong>
          {this.props.event.city}
        </p>
        <form onSubmit={this.toggleEventDetails}>
          <input type="hidden" name="eventId" value={this.props.event._id} />
          {this.state.toggled ? (
            <button className="event-btn">Hide details</button>
          ) : (
            <button className="event-btn">Show details</button>
          )}
        </form>
        {this.state.toggled && (
          <EventDetails
            event={this.props.event}
            userID={this.props.user}
            getData={this.props.getData}
          />
        )}
      </div>
    );
  }
}

export default EventItem;
