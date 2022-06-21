import React, { Component } from "react";
import "./style.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return <h2 className="title">{this.props.title}</h2>;
  }
}
