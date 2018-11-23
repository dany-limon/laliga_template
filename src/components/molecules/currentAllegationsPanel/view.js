import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styled'
import { SeasonInfo, CountDown, Breaches, ArrowButton, PanelTitle } from '../../atoms'

export default class CurrentAllegationsPanel extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    code: PropTypes.string,
    season: PropTypes.number,
    countDown: PropTypes.string,
    breaches: PropTypes.number
  }

  static defaultProps = {
    title: '',
    code: null,
    season: 0,
    countDown: '-',
    breaches: 0
  }

  render() {
    const { title, code, season, countDown, breaches } = this.props
    return (
      <Styled.CurrentAllegationsPanel>
        <PanelTitle title={title} code={code} />
        <SeasonInfo season={season} />
        <CountDown value={countDown} />
        <Breaches codeLeft={code} codeRight={code} value={breaches} />
        <ArrowButton type="left" />
        <ArrowButton type="right" />
      </Styled.CurrentAllegationsPanel>
    )
  }
}
