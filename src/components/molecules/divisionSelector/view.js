import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styled'
import laliga_santander_white from '../../../assets/images/laliga_santander_white.svg'
import laliga_123_white from '../../../assets/images/laliga_123_white.svg'

export default class DivisionSelector extends PureComponent {
  static propTypes = {
    value: PropTypes.oneOf(['santander', '123'])
  }

  static defaultProps = {
    value: 'santander'
  }

  render() {
    const { value } = this.props
    return (
      <Styled.DivisionSelector>
        <Item selected={value === 'santander'} division="santander" />
        <Item selected={value === '123'} division="123" />
      </Styled.DivisionSelector>
    )
  }
}

const Item = ({ selected, division }) => (
  <Styled.Item selected={selected}>
    <img src={division === 'santander' ? laliga_santander_white : laliga_123_white} alt="laliga" />
  </Styled.Item>
)
