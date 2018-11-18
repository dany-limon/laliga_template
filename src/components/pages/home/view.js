import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/demo">ir a pagina demo</Link>
      </div>
    )
  }
}

Home.propTypes = {}

Home.defaultProps = {}
