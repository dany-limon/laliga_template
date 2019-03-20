import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styled'
import i18n from '../../../assets/i18n'
import selectedBigImage from '../../../assets/images/selected_big.svg'
import noSelectedBigImage from '../../../assets/images/no_selected_big.svg'
import escudo_demo from '../../../assets/images/escudo_demo.svg'

export default class Breaches extends PureComponent {
  static propTypes = {
    codeLeft: PropTypes.string,
    codeRight: PropTypes.string,
    value: PropTypes.number
  }

  static defaultProps = {
    codeLeft: '-',
    codeRight: '-',
    value: 0
  }

  render() {
    const { codeLeft, codeRight, value } = this.props
    return (
      <Styled.Breaches>
        <ClubItem left code={codeLeft} selected />
        <ValueItem value={value} />
        <ClubItem code={codeRight} />
      </Styled.Breaches>
    )
  }
}

const ClubItem = ({ left, code, selected }) => (
  <Styled.ClubItem left={left}>
    <p>{code}</p>
    <div>
      <Styled.ClubItemSelection src={selected ? selectedBigImage : noSelectedBigImage} alt="selected" />
      <Styled.ClubItemImage src={escudo_demo} alt="team" />
    </div>
  </Styled.ClubItem>
)

ClubItem.propTypes = {
  left: PropTypes.bool,
  code: PropTypes.string,
  selected: PropTypes.bool
}

const ValueItem = ({ value }) => (
  <Styled.ValueItem>
    <p>{i18n.breaches}</p>
    <p>{value}</p>
  </Styled.ValueItem>
)

ValueItem.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
