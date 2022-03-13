import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filteredMonsters: [],
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users, filteredMonsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  handleMonsterChange = (event) => {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    this.setState((prevState, props) => {
      return { ...prevState, filteredMonsters };
    });
  };

  render() {
    console.log("render");
    return (
      <div className="App">
        <input
          className="searchBox"
          type="search"
          placeholder="search monsters"
          onChange={this.handleMonsterChange}
        />
        {this.state.filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
