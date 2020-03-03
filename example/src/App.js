import React, { Component } from 'react'

import {ColorHeadingOne,ColorHeadingTwo} from 'color-heading';


export default class App extends Component {
  render () {
    return (
      <div>
        <ColorHeadingOne text='Modern React component module' color={'red'}/>
        <ColorHeadingTwo text='Modern React component module' color={'blue'}/>
      </div>
    )
  }
}
