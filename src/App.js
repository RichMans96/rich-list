import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import List from "./components/List";

class App extends Component {
  state = {
    people: [],
    isLoading: true,
  };

  componentDidMount() {
    this.getForbesData();
  }

  displayBillion = () => {
    this.state.people.forEach((person) => {
      const wealth = person.finalWorth.toString().split(".");
      if (wealth[0].length === 6) {
        person.finalWorth = wealth[0].substring(0, 4) / 10;
      } else if (wealth[0].length < 6) {
        person.finalWorth = wealth[0].substring(0, 3) / 10;
      }
    });
  };

  getForbesData = () => {
    axios.get("https://forbes400.herokuapp.com/api/forbes400?limit=10").then(({ data }) => {
      this.setState({
        people: data,
        isLoading: false,
      });
    });
  };

  render() {
    return (
      <div className="App">
        {this.displayBillion()}
        <List people={this.state.people} />
      </div>
    );
  }
}

export default App;
