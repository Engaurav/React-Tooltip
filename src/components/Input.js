import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <div>
        <div>
            <label>Enter Content of Tooltip</label>
            <input type="text" name="tooltip" className='form-control'/>
        </div>
        <div>
            <label>Enter Direction of Tooltip</label>
            <select class="form-select">
                <option value="top">Top</option>
                <option value="left">Left</option>
                <option value="right">Right</option>
                <option value="bottom">Bottom</option>
            </select>
        </div>
      </div>
    )
  }
}
