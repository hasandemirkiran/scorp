import React, { Component } from "react";
import "./App.css";
// import components
import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer.js";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <NavBar />
        </div>
        <Footer />
      </div>
    );
  }
}
