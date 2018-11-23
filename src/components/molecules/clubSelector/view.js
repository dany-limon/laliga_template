import React, { PureComponent } from 'react'
import _ from 'lodash'
import * as Styled from './styled'
import escudo_demo from '../../../assets/images/escudo_demo.svg'
import noSelectedImage from '../../../assets/images/no_selected.svg'
import selectedImage from '../../../assets/images/selected.svg'

export default class ClubSelector extends PureComponent {
  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <Styled.ClubSelector>
        <Item selected />
        {_.map(_.times(19), (_, index) => (
          <Item key={`club${index}`} />
        ))}
      </Styled.ClubSelector>
    )
  }
}

const Item = ({ selected }) => (
  <Styled.Item>
    <img src={escudo_demo} alt="escudo" />
    <img src={selected ? selectedImage : noSelectedImage} alt="selector" />
  </Styled.Item>
)
