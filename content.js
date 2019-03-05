import React, { Component } from "react";
import Music_list from "./music_list";
import Searchbar from "./searchbar";

class Iframes extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="recommend_music">
        <iframe
          src={this.props.src}
          width="450px"
          height="450px"
          id={this.props.id}
          className="iframe"
          display="initial"
          position="relative"
          allowFullScreen
        />
      </div>
    );
  }
}

class Content extends Component {
  constructor() {
    super();
    this.state = {
      music: Music_list
    };
  }

  render() {
    const musical = this.state.music.map(items => (
      <Iframes src={items.src} id={items.id} />
    ));
    return (
      <div>
        <Searchbar />
        <br />
        <br />
        <br />
        <h1 style={{ textAlign: "center", fontSize: "32px", color: "red" }}>
          RECOMMENDATIONS...
        </h1>
        <p className="recommend">{musical}</p>
      </div>
    );
  }
}

export default Content;
