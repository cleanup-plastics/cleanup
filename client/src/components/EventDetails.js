import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class EventDetails extends Component {
  deleteEvent = () => {
    const eventID = this.props.event._id;
    axios
      .delete(`/api/events/${eventID}`)

      .then(() => {
        this.props.getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    // console.log(this.props.event)
    return (
      <div>
        <p>
          <strong> Description: </strong>
          {this.props.event.description}
        </p>
        <p>
          <strong>Date: </strong>
          {this.props.event.date}
        </p>
        <p>
          <strong>Time: </strong>
          {this.props.event.time}
        </p>
        <p>
          <strong>Location: </strong>
          {this.props.event.location}
        </p>
        <p>
          <strong>Street: </strong>
          {this.props.event.street}
        </p>

        <img
          className="event-image"
          src={this.props.event.imageUrl}
          alt="event"
        />
        {this.props.userID === this.props.event.owner && (
          <div>
            <button>
              <Link to={`/events/${this.props.event._id}/edit`}>Edit</Link>
            </button>
            <button onClick={this.deleteEvent}>Delete</button>
          </div>
        )}
      </div>
    );
  }
}

export default EventDetails;
