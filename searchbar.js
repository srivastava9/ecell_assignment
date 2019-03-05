import React, { Component } from "react";
import Music_list from "./music_list";
import "./style.css";
class Searchbar extends Component {
  constructor() {
    super();
    this.state = {
      searchName: "",
      music1: Music_list
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      searchName: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="search_bar"
          placeholder="Search The Music"
          onChange={this.handleChange}
        />

        <button
          type="Submit"
          Value="Submit"
          className="Song_"
          onClick={this.handleClick}
        >
          Submit
        </button>

        <p className="searchlist">{this.state.searchName}</p>
      </div>
    );
  }
}
export default Searchbar;
