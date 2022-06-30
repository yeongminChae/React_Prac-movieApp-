import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
          {/* /moive/:id -> dinamic url  */}
          {/* if /moive/id which withiut the : we'll send the user to text ID not movie.id */}
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

// react router is also support the dinamic url (dinamic url is i cam put some variables in my url)

export default App;
