import React, { Component } from 'react'

export default class CBC extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
      <div>
        <p>This is class based component {this.props.value}</p>
      </div>
    )
  }
}
