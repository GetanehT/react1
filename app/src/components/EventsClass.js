import React, { Component } from 'react'

export class EventsClass extends Component {
    clickHandler(){
        console.log("clicked the class button");
}
  render() {
    return (
      <button onClick={this.clickHandler}>click meEvent class </button>
    )
  }
}

export default EventsClass