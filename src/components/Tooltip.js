import React, { Component } from 'react'
import '../css/tooltip.css'

export default class Tooltip extends Component {
  render() {
    return (
      <div class="my-tooltip">
        <span class="my-tooltiptext">Thanks for Hover!</span>
        {this.props.children}
      </div>
    )
  }
}
