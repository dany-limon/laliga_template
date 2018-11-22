import styled from 'styled-components/macro'

const DEBUG_MODE = false

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

export const ContentCountDown = styled.div`
  background: ${DEBUG_MODE ? 'green' : 'transparent'};
  max-width: 160px;
  display: flex;
  align-items: center;
  align-self: center;
  margin: 20px auto;
  background: ${props => props.theme.colors.black};
  img {
    width: 20px;
    height: 22px;
    padding: 6px;
    background: ${props => props.theme.colors.purpleDark};
  }

  span {
    text-align: center;
    color: ${props => props.theme.colors.white};
    padding-top: 6px;
    font-family: ${props => props.theme.fonts.CoreSans500};
    background: ${DEBUG_MODE ? 'green' : 'transparent'};
    flex: 1;
  }
`

export const ContentBreachesLeft = styled.div``

export const ContentBreachesCenter = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`

export const ContentBreachesRight = styled.div``

export const ContentBreaches = styled.div`
  background: ${DEBUG_MODE ? 'yellow' : 'transparent'};
  display: flex;
`

export const Content = styled.div`
  background: ${DEBUG_MODE ? 'orange' : 'transparent'};
  max-width: 323px;
  margin: 0 auto;
  padding: 5px 0 20px 0;
`

export const StatsSimple = styled.div`
  position: relative;
  background: ${props => props.theme.colors.purple};
`
