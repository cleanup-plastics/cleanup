import React, { Component } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import { Link } from "react-router-dom";
import 'mapbox-gl/dist/mapbox-gl.css';

const token= 'pk.eyJ1IjoiZWx2aWFzaSIsImEiOiJja2w1ZjFhNDgwbms4MzBwNmpmcTUzaXU5In0.tyY-4o-vyzl93U7XLFjekQ'

export default class Map extends Component {

  state = {
    viewport: {
      width: 500,
      height: 500,
      latitude: 52.52,
      longitude: 13.405,
      zoom: 6
    },
    mounted: false,
    selectedEvent: null,
    toggled: false
  }

  onViewportChange= viewport => {
    this.setState({
      viewport: {...this.state.viewport, ...viewport}
    })
  }

  setSelectedEvent = event => {
    //event.preventDefault();
    this.setState({ selectedEvent: event })
  }

  toggleEventDetails = event => {
    //event.preventDefault();
    this.setState((state) => ({
      toggled: !state.toggled
    }));
  }

  deselectEvent = event => {
    this.setState({ selectedEvent: null })
  }

  componentDidMount () {
    this.setState({ mounted: true })
  }

 
  render() {
    if(!this.props.events) {
      return (
        <></>
      )
    }
    let pins = this.props.events
    return (
      <div>
      <ReactMapGL 
      mapboxApiAccessToken={token}
      mapStyle='mapbox://styles/mapbox/streets-v11'
      {...this.state.viewport}
      onViewportChange={(viewport) => {
          if (this.state.mounted) { this.setState({ viewport }) }
        }}
      >
          {pins.map(pin => {
            return (
              <Marker key={pin._id} 
            latitude={pin.coordinates[1]}
            longitude={pin.coordinates[0]}
            offsetTop={-20} 
            offsetLeft={-10}
            >
            <button 
            className="marker-btn"
            onClick={() => this.setSelectedEvent(pin)}>
              <img src="/pointer.svg" alt="event pointer"/>
            </button>

            </Marker>
            )
          })}
          {this.state.selectedEvent ? (
            <Popup 
            latitude={this.state.selectedEvent.coordinates[1]}
            longitude={this.state.selectedEvent.coordinates[0]}
            closeButton={false}
            >
              <div>
                <h4>{this.state.selectedEvent.title}</h4>
                  <p>Date:{this.state.selectedEvent.date}</p>                 
                 <button onClick={() => this.toggleEventDetails(this.state.selectedEvent)}>{this.state.toggled ? "Hide details" : "Show Details"}</button>
                    <p>{this.state.toggled  && <p>{this.state.selectedEvent.description} <br/>
                    <b>Location:</b> {this.state.selectedEvent.location} <br/>
                    <><button><Link to={`/events/${this.state.selectedEvent._id}`}>Save the date</Link></button></></p>}</p>
                
                  <button onClick={this.deselectEvent}>Close</button>
              </div>
            </Popup>
          ) : null}
        </ReactMapGL>
      </div>
    )
  }
}
