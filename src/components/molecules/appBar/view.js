import React, { PureComponent } from 'react'
import * as Styled from './styled'
import i18n from '../../../assets/i18n'
import escudo_demo from '../../../assets/images/escudo_demo.svg'
import completo_gris from '../../../assets/images/completo_gris.png'
import laLigaImage from '../../../assets/images/laliga_logo.svg'

export default class AppBar extends PureComponent {
  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <Styled.NavBar>
        <Styled.Content>
          <Styled.Background src={completo_gris} alt="escudo_demo" />
        </Styled.Content>
        <Styled.LaLigaLogo src={laLigaImage} alt="LaLiga logo" className={this.props.className} />
        <Styled.Title>{i18n.allegationsAndExemptions}</Styled.Title>
        <Styled.ClubImage src={escudo_demo} alt="escudo_demo" />
        <Styled.Separator />
        <Styled.Historical>{i18n.historical}</Styled.Historical>
      </Styled.NavBar>
    )
  }
}
