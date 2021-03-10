import React, { Component } from 'react';
import axios from 'axios';


export default class SavedEvents extends Component {

  state = {
    //user: [],
    events: []
  };


  componentDidMount() {
    this.getData()
    console.log('the event componentdidmount')
  }


  async getData () {
    const userID = this.props.match.params.id
    console.log(userID)
    try {
      let request = await axios.get(`/api/${userID}/savedEvents`)
    let response = await request
    console.log(response, "response at savedevents FE")
    
        this.setState({
          events: response.data
        });
console.log("new state", this.state.events)
      }catch(err) {
        console.log(err);
      }
  };

  render() {
    let renderEvents;
    if (this.state.events){
      renderEvents = this.state.events.map((event, index) => {
        return  <div key={index}>
         <h2>{event.title}</h2>
           <p>Location: {event.location}</p>
           <p>City: {event.city}</p>
          <p>Date: {event.date}</p>
           <p>Time: {event.time}</p>
        </div>
      })
    }
   
    return (
      <div>
        {renderEvents}
      </div>

    )
  }
}
