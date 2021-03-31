import "./styles.css";
import { Fragment } from "react";
import Navbar from "./Layout/Navbar";
import Landing from "./Layout/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./Auth/Register";
import Login from "./Auth/Login";

export default function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact={true} path="/" component={Landing} />
        <div className="container">
          <Switch>
            <Route exact={true} path="/register" component={Register} />
            <Route exact={true} path="/login" component={Login} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}
