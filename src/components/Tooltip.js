import React, { Component } from "react";
import "../css/tooltip.css";

export default class Tooltip extends Component {
  constructor() {
    super();
    this.state = {
      input: "my-tooltiptext t-left",
      content : "Thanks for hovering!"
    };
  }
  
  render() {
    return (
      <div class="my-tooltip">
        <span class={this.state.input}>{this.state.content}</span>
        {this.props.children}
      </div>
    );
  }
}
