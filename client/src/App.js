import "./App.css";
import { Route, Redirect } from "react-router-dom";
import CreateEvent from "./components/CreateEvent";
import Events from "./components/Events";
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import EventToSave from './components/EventToSave';
import SavedEvents from './components/SavedEvents';
import EditEvent from "./components/EditEvent";
import Homepage from "./components/Homepage";

import React, { Component } from "react";

class App extends Component {
  state = {
    user: this.props.user,
  };

  setUser = (user) => {
    this.setState({
      user: user,
    });
  };

  render() {
    return (
      <div>
        <Navbar user={this.state.user} setUser={this.setUser} />

        <Route
          exact
          path="/" component={Homepage}
        />
        <Route
          exact
          path="/events"
          render={(props) => {
            if (this.state.user) {
              return <Events user={this.state.user} {...props}/>
            } else return <Redirect to='/login' />
          }}
        />

        <Route exact path="/events/create" 
        render={(props) => <CreateEvent user={this.state.user} {...props}/> }
        />
        <Route exact path="/events/:id" 
       render={(props) => <EventToSave user={this.state.user} {...props} />}
       />
            
        <Route exact path="/:id/savedEvents" 
        render={(props) => <SavedEvents user={this.state.user} {...props}/> }
        />

        <Route
          exact
          path="/events/:id/edit"
          render={(props) => <EditEvent {...props} />}
        />

        <Route
          exact
          path="/signup"
          // 'render prop' to pass props in routing
          render={(props) => <Signup setUser={this.setUser} {...props} />}
        />
        <Route
          exact
          path="/login"
          render={(props) => <Login setUser={this.setUser} {...props} />}
        />
      </div>
    );
  }
}

export default App;
