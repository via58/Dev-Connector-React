import "./styles.css";
import { Fragment } from "react";
import Navbar from "./Layout/Navbar";
import Landing from "./Layout/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import { Provider } from "react-redux";
import store from "./store";
import Alert from "./Layout/Alert";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact={true} path="/" component={Landing} />
          <div className="container">
            <Alert />
            <Switch>
              <Route exact={true} path="/register" component={Register} />
              <Route exact={true} path="/login" component={Login} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
}
