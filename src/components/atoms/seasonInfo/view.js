import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styled'
import i18n from '../../../assets/i18n'
import laliga_santander_white from '../../../assets/images/laliga_santander_white.svg'
import laliga_123_white from '../../../assets/images/laliga_123_white.svg'

export default class SeasonInfo extends PureComponent {
  static propTypes = {
    season: PropTypes.number,
    division: PropTypes.oneOf(['santander', '123'])
  }

  static defaultProps = {
    season: 0,
    division: 'santander'
  }

  render() {
    const { season, division } = this.props
    const image = division === 'santander' ? laliga_santander_white : laliga_123_white
    return (
      <Styled.SeasonInfo>
        <img src={image} alt="laliga" />
        <span>{i18n.formatString(i18n.seasonNumber, season)}</span>
      </Styled.SeasonInfo>
    )
  }
}
