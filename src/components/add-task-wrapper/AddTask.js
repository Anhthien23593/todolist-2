import React, { Component } from "react";
import { lists } from "../../constant";
import "./AddTask.css";

export default class addtask extends Component {
  constructor() {
    super();
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChangeInput(event) {
    console.log(event.target.value);
  }

  handleClick(event) {
    lists.push.handleChangeInput();
  }
  render() {
    return (
      <div className="addtask">
        <input
          type={"text"}
          className="input input-task"
          placeholder="Add new task in here"
          onChange={this.handleChangeInput}
        ></input>
        <button className=" btn--plus" onClick={this.handleClick}>
          +
        </button>
      </div>
    );
  }
}
