import styled from 'styled-components/macro'

export const TitleCode = styled.span`
  font-family: ${props => props.theme.fonts.CoreSans400};
`

export const TitleSeparator = styled.span`
  font-family: ${props => props.theme.fonts.CoreSans400};
  margin: 0 5px;
`

export const TitleTitle = styled.span`
  font-family: ${props => props.theme.fonts.CoreSans700};
  text-transform: capitalize;
`

export const Title = styled.span`
  p {
    background: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
    text-transform: uppercase;
    font-size: 16px;
    text-align: left;
    padding: 10px 0 7px 20px;
  }

  div {
    background: ${props => props.theme.colors.black};
    opacity: 0.41;
    height: 4px;
  }
`

export const StatsSimple = styled.div`
  position: relative;
  background: ${props => props.theme.colors.purple};
`
