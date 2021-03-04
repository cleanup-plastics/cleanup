import './App.css';
import { Route } from "react-router-dom";
import CreateEvent from './components/CreateEvent';
import Events from './components/Events';
  
  
function App() {
  return (
    <div>
      <Route exact path="/events" component={Events} />
      <Route exact path="/events/create" component={CreateEvent} />
    </div>
  );
}

export default App;
