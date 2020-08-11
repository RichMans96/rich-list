import React, { Component } from "react";
import axios from "axios";
import Person from "./Person";

class List extends Component {
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
      <main>
        {this.state.people.map((person) => {
          return (
            <Person
              key={person.rank}
              name={person.personName}
              source={person.source}
              gender={person.gender}
              worth={person.finalWorth}
            />
          );
        })}
      </main>
    );
  }
}

export default List;
