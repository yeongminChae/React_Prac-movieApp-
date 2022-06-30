import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      {/* switch is going to look for a route and it is render the component */}
      <Switch>
        <Route path="/moive">
          <Detail />
        </Route>
        {/* inside of route is where we r going to write out component */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
