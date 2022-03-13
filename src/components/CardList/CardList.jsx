import React, { Component } from "react";

export default class CardList extends Component {
  render() {
    console.log("render from CardList");
    console.log(this.props.monsters);

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