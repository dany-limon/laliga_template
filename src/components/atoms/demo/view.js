import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AtomDemoStyled } from './styled'

export default class AtomDemo extends Component {
  render() {
    return (
      <AtomDemoStyled>
        <span>boton</span>
      </AtomDemoStyled>
    )
  }
}

AtomDemo.propTypes = {
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning'])
}

AtomDemo.defaultProps = {
  variant: 'default'
}
