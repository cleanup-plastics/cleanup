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
        {this.props.userID === this.props.event.owner ? (
          <div>
            <button>
              <Link to={`/events/${this.props.event._id}/edit`}>Edit</Link>
            </button>
            <button onClick={this.deleteEvent}>Delete</button>
          </div>
        ) : (
          <button>
              <Link to={`/events/${this.props.event._id}`}>Save the Date</Link>
            </button> 
        )}

      </div>
    );
  }
}

export default EventDetails;
