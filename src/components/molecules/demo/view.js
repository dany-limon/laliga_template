import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MoleculeDemoStyled } from './styled'

export default class MoleculeDemo extends Component {
  render() {
    return (
      <MoleculeDemoStyled>
        <span>boton</span>
      </MoleculeDemoStyled>
    )
  }
}

MoleculeDemo.propTypes = {
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning'])
}

MoleculeDemo.defaultProps = {
  variant: 'default'
}
