import React, { Component } from 'react';

class EventDetails extends Component {
  render() {
    console.log(this.props.events.title);

    //map over events to show details:
    return (
      <div>
        <p>Event details</p>
        <p>{this.props.events[0].title}</p>
      </div>
    );
  }
}

export default EventDetails;