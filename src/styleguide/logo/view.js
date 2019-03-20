import React, { Component } from 'react'
import laLigaImage from '../../assets/images/laliga_logo.svg'

export default class Logo extends Component {
  render() {
    return (
      <div>
        <img src={laLigaImage} style={{ width: 120 }} alt="logo" />
        <p style={{ fontFamily: 'CoreSans', marginTop: 10, color: 'white', fontSize: 18 }}>ALEGACIONES</p>
      </div>
    )
  }
}
