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
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.CoreSans700};
  font-size: 16px;
  text-transform: uppercase;
`

export const Title = styled.span`
  p {
    background: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
    text-transform: uppercase;
    font-size: 16px;
    text-align: center;
    padding: 7px 0 5px 0;
  }

  div {
    background: ${props => props.theme.colors.black};
    opacity: 0.41;
    height: 4px;
  }
`

export const Separator = styled.div`
  background: ${props => props.theme.colors.white};
  width: 1px;
  height: 32px;
  display: inline-block;
`

export const Content = styled.div`
  background: ${DEBUG_MODE ? 'orange' : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 480px;
  margin: 0 auto;
  padding: 5px 0 20px 0;
`

export const ItemValue = styled.p`
  background: ${DEBUG_MODE ? 'green' : 'transparent'};
  text-align: center;
  font-family: ${props => props.theme.fonts.LaLigaDorsal};
  font-size: 40px;
  color: ${props => props.theme.colors.white};
`

export const ItemLabel = styled.p`
  text-align: center;
  font-family: ${props => props.theme.fonts.CoreSans500};
  font-size: 16px;
  background: ${DEBUG_MODE ? 'red' : 'transparent'};
  color: ${props => props.theme.colors.white};
  margin-top: 5px;
  text-transform: capitalize;
`

export const Item = styled.div`
  display: inline-block;
  background: ${DEBUG_MODE ? 'blue' : 'transparent'};
  padding: 2px;
  flex-direction: row;
`

export const StatsSimple = styled.div`
  position: relative;
  background: ${props => props.theme.colors.purple80};
`
