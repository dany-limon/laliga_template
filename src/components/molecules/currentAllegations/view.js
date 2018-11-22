import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styled'
import { SeasonInfo } from '../../atoms'
import countDownImage from '../../../assets/images/countdown.svg'
import selectedBigImage from '../../../assets/images/selected_big.svg'
import noSelectedBigImage from '../../../assets/images/no_selected_big.svg'

export default class CurrentAllegations extends Component {
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
        <Styled.Content>
          <SeasonInfo season={season} />
          <CountDown countDown={countDown} />
          <Breaches />
        </Styled.Content>
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

const CountDown = ({ countDown }) => (
  <Styled.ContentCountDown>
    <img src={countDownImage} alt="countdown" />
    <span>{countDown}</span>
  </Styled.ContentCountDown>
)

const Breaches = ({ season }) => (
  <Styled.ContentBreaches>
    <Styled.ContentBreachesLeft>
      <p>Bet</p>
      <img src={selectedBigImage} alt="bet" />
    </Styled.ContentBreachesLeft>
    <Styled.ContentBreachesCenter>
      <p>incumpliminetos</p>
      <p>2</p>
    </Styled.ContentBreachesCenter>
    <Styled.ContentBreachesRight>
      <p>Val</p>
      <img src={noSelectedBigImage} alt="val" />
    </Styled.ContentBreachesRight>
  </Styled.ContentBreaches>
)
