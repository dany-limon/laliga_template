import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styled'
import i18n from '../../../assets/i18n'
import laLigaImage from '../../../assets/images/laliga_santander_white.svg'

export default class SeasonInfo extends Component {
  static propTypes = {
    season: PropTypes.number
  }

  static defaultProps = {
    season: 0
  }

  render() {
    const { season } = this.props
    return (
      <Styled.SeasonInfo>
        <img src={laLigaImage} alt="laliga" />
        <span>{i18n.formatString(i18n.seasonNumber, season)}</span>
      </Styled.SeasonInfo>
    )
  }
}
