import styled from 'styled-components/macro'

export const PanelTitleCode = styled.span`
  font-family: ${props => props.theme.fonts.CoreSans400};
`

export const PanelTitleSeparator = styled.span`
  font-family: ${props => props.theme.fonts.CoreSans400};
  margin: 0 5px;
`

export const PanelTitleTitle = styled.span`
  font-family: ${props => props.theme.fonts.CoreSans700};
  text-transform: capitalize;
`

export const PanelTitle = styled.span`
  p {
    background: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
    text-transform: uppercase;
    font-size: 16px;
    text-align: ${props => (props.centered ? 'center' : 'left')};
    padding: 10px 20px 7px 20px;
  }

  div {
    background: ${props => props.theme.colors.black};
    opacity: 0.41;
    height: 4px;
  }
`
