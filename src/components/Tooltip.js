import React, { Component } from "react";
import "../css/tooltip.css";

export default class Tooltip extends Component {
  constructor() {
    super();
    this.state = {
      direction: "my-tooltiptext t-left",
      content : "Hover Content"
    };
  }

 hanldeTooltip = () => {
    this.setState({
        content : this.props.content,
    })
    if(this.props.direction === "top"){
        this.setState({
            direction : "my-tooltiptext t-top",
        })
    }else if(this.props.direction === "right"){
        this.setState({
            direction : "my-tooltiptext t-right",
        })
    }else if(this.props.direction === "left"){
        this.setState({
            direction : "my-tooltiptext t-left",
        })
    }else{
        this.setState({
            direction : "my-tooltiptext t-bottom",
        })
    }
  }
  componentDidMount(){
    this.hanldeTooltip();
  }


  render() {
    return (
      <div className="my-tooltip" onMouseEnter={this.hanldeTooltip}>
        <span className={this.state.direction}>{this.state.content}</span>
        {this.props.children}
      </div>
    );
  }
}
