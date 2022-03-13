import React, { Component } from "react";

export default class CardList extends Component {
  render() {
    console.log("render");
    const { monsters } = this.props;

    return (
      <div>
        {monsters.map((monster) => {
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
