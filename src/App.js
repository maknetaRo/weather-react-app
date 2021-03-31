import "./App.css";
import Weather from "./components/Weather";
import Day from './components/Day'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Weather} />
        <Route exact path="/day" component={Day} />
      </div>
    </Router>


  );
}

export default App;
