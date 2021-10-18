import "./App.css";
import { Switch, Redirect, Route } from "react-router-dom";
import About from "./components/About.js";
import Profiles from "./components/Profiles.js";
import Home from "./components/Home.js";

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/profiles" component={Profiles} />
          <Route path="/home" component={Home} />
          <Route path="/" render={() => <Redirect to="/home" />} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
