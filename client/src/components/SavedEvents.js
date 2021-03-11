import React, { Component } from "react";
import axios from "axios";

export default class SavedEvents extends Component {
  state = {
    //user: [],
    events: [],
  };

  componentDidMount() {
    this.getData();
    console.log("the event componentdidmount");
  }

  async getData() {
    const userID = this.props.match.params.id;
    console.log(userID);
    try {
      let request = await axios.get(`/api/${userID}/savedEvents`);
      let response = await request;
      console.log(response, "response at savedevents FE");

      this.setState({
        events: response.data,
      });
      console.log("new state", this.state.events);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    let renderEvents;
    if (this.state.events) {
      renderEvents = this.state.events.map((event, index) => {
        return (
          <div key={index} className="section">
            <h2>{event.title}</h2>
            <p>
              <strong> Location: </strong>
              {event.location}
            </p>
            <p>
              <strong> City: </strong>
              {event.city}
            </p>
            <p>
              <strong> Date: </strong>
              {event.date}
            </p>
            <p>
              <strong> Time: </strong>
              {event.time}
            </p>
          </div>
        );
      });
    }

    return <div>{renderEvents}</div>;
  }
}
