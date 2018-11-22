import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styled'
import countDownImage from '../../../assets/images/countdown.svg'

export default class CountDown extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
    dark: PropTypes.bool
  }

  static defaultProps = {
    value: '',
    dark: true
  }

  render() {
    const { value } = this.props
    return (
      <Styled.CountDown {...this.props}>
        <img src={countDownImage} alt="countdown" />
        <span>{value}</span>
      </Styled.CountDown>
    )
  }
}
