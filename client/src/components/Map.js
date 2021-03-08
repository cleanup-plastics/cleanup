import React, { Component } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
//

const token= 'pk.eyJ1IjoiZWx2aWFzaSIsImEiOiJja2w1ZjFhNDgwbms4MzBwNmpmcTUzaXU5In0.tyY-4o-vyzl93U7XLFjekQ'

export default class Map extends Component {

  state = {
    viewport: {
      width: 300,
      height: 400,
      latitude: 52.52,
      longitude: 13.405,
      zoom: 8
    },
    mounted: false,
    //events: this.props.events
  }

  onViewportChange= viewport => {
    this.setState({
      viewport: {...this.state.viewport, ...viewport}
    })
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
            >
            <button className="marker-btn">
              <img src="/pointer.svg" alt="event pointer"/>
            </button>

            </Marker>
            )
          })}
        </ReactMapGL>
        
      </div>
    )
  }
}
