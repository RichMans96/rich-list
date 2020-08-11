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
        <List people={this.state.people} />
      </div>
    );
  }
}

export default App;
