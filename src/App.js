import "./styles.css";
import { Fragment } from "react";
import Navbar from "./Layout/Navbar";
import Landing from "./Layout/Landing";

export default function App() {
  return (
    <Fragment>
      <Navbar />
      <Landing />
    </Fragment>
  );
}
