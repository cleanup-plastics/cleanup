import "./App.css";
import { Route } from "react-router-dom";
import CreateEvent from "./components/CreateEvent";
import Events from "./components/Events";

import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/events" component={Events} />
        <Route exact path="/events/create" component={CreateEvent} />
      </div>
    );
  }
}

export default App;
