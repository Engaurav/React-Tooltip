import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Tooltip from "./components/Tooltip";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      direction: "top",
      content : "Hover Content"
    };
  }
  

  handleContentInput = (e) => {
    console.log(e.target.value);
    if(e.target.value.length > 0){
      this.setState({
        content : e.target.value
      })
    }else{
      this.setState({
        content : "Hover Content"
      })
    }
    
  }
  handleDirectionInput = (e) => {
    console.log(e.target.value)
    this.setState({
      direction: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <div>
          <h2>This is React Tooltip</h2>
          <div>
            <label>Enter Content of Tooltip</label>
            <input type="text" className="form-control"  onKeyUp={this.handleContentInput} />
          </div>
          <div>
            <label>Enter Direction of Tooltip</label>
            <select className="form-select" onChange={this.handleDirectionInput}>
              <option value="top">Top</option>
              <option value="left">Left</option>
              <option value="right">Right</option>
              <option value="bottom">Bottom</option>
            </select>
          </div>
        </div>


        <Tooltip content={this.state.content} direction={this.state.direction}>
          <Button />
        </Tooltip>
      </div>
    );
  }
}
