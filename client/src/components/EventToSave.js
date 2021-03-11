import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class SavedEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event: {},
      savedEvents: null,
      redirect: null,
    };
    this.saveEvent = this.saveEvent.bind(this);
  }

  componentDidMount() {
    this.getData();
    console.log("the event componentdidmount");
  }

  getData = () => {
    const eventID = this.props.match.params.id;
    axios
      .get(`/api/events/${eventID}`)
      .then((response) => {
        console.log("response from GET:", response.data);
        this.setState({
          event: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  saveEvent = (event) => {
    event.preventDefault();
    const eventID = this.props.match.params.id;
    const userID = this.props.user._id;
    console.log(eventID);
    console.log(userID);
    axios
      .put("/api/user/saveEvent", {
        params: {
          savedEvents: eventID,
          currentUser: userID,
        },
      })
      .then(() => {
        console.log("axios put is done");
        console.log("the STATE AFTER PUT", this.state.event);
        this.setState({ redirect: `/${userID}/savedEvents` });
      })
      .catch((err) => {
        console.log("Error while updating the event: ", err);
      });
  };

  render() {
    //console.log(this.props.user)
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    return (
      <div className="section">
        <h3>{this.state.event.title}</h3>
        <p>
          <b>Description: </b> {this.state.event.description}
        </p>
        <p>
          <b>Date: </b> {this.state.event.date}
        </p>
        <p>
          <b>Time: </b>
          {this.state.event.time}
        </p>
        <p>
          <b>Location: </b>
          {this.state.event.location}
        </p>
        <p>
          <b>Street: </b> {this.state.event.street}
        </p>
        <img
          src={this.state.event.imageUrl}
          alt="event"
          style={{ width: "200px" }}
        />
        <form onSubmit={(event) => this.saveEvent(event)}>
          <input
            type="hidden"
            id="savedEvents"
            name="savedEvents"
            value={this.props.user._id}
          />
          <button type="submit" className="btn event-btn">
            Add to your List
          </button>
        </form>
      </div>
    );
  }
}
