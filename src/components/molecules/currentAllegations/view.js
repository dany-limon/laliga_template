import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styled'
import { SeasonInfo, CountDown, Breaches, ArrowButton } from '../../atoms'

export default class CurrentAllegations extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    code: PropTypes.string,
    season: PropTypes.number,
    countDown: PropTypes.string
  }

  static defaultProps = {
    title: '',
    code: null,
    season: 0,
    countDown: '-'
  }

  render() {
    const { title, code, season, countDown } = this.props
    return (
      <Styled.StatsSimple>
        <Title title={title} code={code} />
        <SeasonInfo season={season} />
        <CountDown value={countDown} />
        <Breaches />
        <ArrowButton type="left" />
        <ArrowButton type="right" />
      </Styled.StatsSimple>
    )
  }
}

const Title = ({ title, code }) => (
  <Styled.Title>
    <p>
      {code && <Styled.TitleCode>{code}</Styled.TitleCode>}
      {code && <Styled.TitleSeparator>|</Styled.TitleSeparator>}
      <Styled.TitleTitle>{title}</Styled.TitleTitle>
    </p>
    <div />
  </Styled.Title>
)
