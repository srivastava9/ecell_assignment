import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from "./style.css";
import photo from "./music.jpg";
import icon from "./favicon.ico";
import Content from "./content";

class App extends Component {
  state = {};
  render() {
    function openContent() {
      ReactDOM.render(<Content />, document.getElementById("content"));
    }
    return (
      <div>
        <header style={{ backgroundImage: `url(${photo})` }}>
          <nav>
            <img
              alt="icon"
              src={icon}
              height="80px"
              style={{ float: "left", transform: "none" }}
            />
            <ul>
              <li className="navbar">Home</li>
              <li className="navbar">About</li>
              <li className="navbar">Services</li>
              <li className="navbar">Blog</li>
              <li className="navbar">Contact Us</li>
            </ul>
          </nav>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1>MUSICALL</h1>
          <button className="Song" onClick={openContent}>
            LISTEN !
          </button>
          <br />
          <p className="slogan"> When Music Calls....</p>
        </header>
        <div id="content" />
      </div>
    );
  }
}

export default App;
