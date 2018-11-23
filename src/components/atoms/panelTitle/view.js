import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styled'
export default class PanelTitle extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    code: PropTypes.string,
    centered: PropTypes.bool
  }

  static defaultProps = {
    title: '',
    code: '',
    centered: false
  }

  render() {
    const { title, code, centered } = this.props
    return (
      <Styled.PanelTitle centered={centered}>
        <p>
          {code && <Styled.PanelTitleCode>{code}</Styled.PanelTitleCode>}
          {code && <Styled.PanelTitleSeparator>|</Styled.PanelTitleSeparator>}
          <Styled.PanelTitleTitle>{title}</Styled.PanelTitleTitle>
        </p>
        <div />
      </Styled.PanelTitle>
    )
  }
}
