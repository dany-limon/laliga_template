import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styled'
import arrow_left from '../../../assets/images/arrow_left.svg'
import arrow_right from '../../../assets/images/arrow_right.svg'

export default class ArrowButton extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(['left', 'right']),
    onClick: PropTypes.func
  }

  static defaultProps = {
    type: 'left',
    onClick: () => {}
  }

  render() {
    const { type, onClick } = this.props
    const image = type === 'left' ? arrow_left : arrow_right
    return (
      <Styled.ArrowButton onClick={onClick}>
        <img src={image} alt="arrow" />
      </Styled.ArrowButton>
    )
  }
}
