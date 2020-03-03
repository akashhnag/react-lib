import React, { Component } from 'react'
import PropTypes from 'prop-types'


export  class ColorHeadingOne extends Component {
  static propTypes = {
    text: PropTypes.string,
    color:PropTypes.string
  }

  render() {
    const {
      text,color
    } = this.props

    return (
      <h1 style={{color}}>
        Example Component: {text}
      </h1>
    )
  }
}

export  class ColorHeadingTwo extends Component {
  static propTypes = {
    text: PropTypes.string,
    color:PropTypes.string
  }

  render() {
    const {
      text,color
    } = this.props

    return (
      <h3 style={{color}}>
        Example Component 2: {text}
      </h3>
    )
  }
}
