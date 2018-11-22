import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styled'
import selectedBigImage from '../../../assets/images/selected_big.svg'
import noSelectedBigImage from '../../../assets/images/no_selected_big.svg'

export default class Breaches extends PureComponent {
  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <Styled.Breaches>
        <Styled.Left>
          <p>Bet</p>
          <img src={selectedBigImage} alt="bet" />
        </Styled.Left>
        <Styled.Center>
          <p>incumpliminetos</p>
          <p>2</p>
        </Styled.Center>
        <Styled.Right>
          <p>Val</p>
          <img src={noSelectedBigImage} alt="val" />
        </Styled.Right>
      </Styled.Breaches>
    )
  }
}
