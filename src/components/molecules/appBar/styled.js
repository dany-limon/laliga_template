import styled from 'styled-components/macro'

const DEBUG_MODE = false

export const Title = styled.span`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.CoreSans600};
  font-size: 14px;
  background: ${DEBUG_MODE ? 'red' : 'transparent'};
`

export const Historical = styled.span`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.CoreSans600};
  font-size: 16px;
  background: ${DEBUG_MODE ? 'green' : 'transparent'};
  text-transform: capitalize;
`

export const ClubImage = styled.img`
  height: 39px;
  background: ${DEBUG_MODE ? 'yellow' : 'transparent'};
`

export const Separator = styled.div`
  width: 2px;
  height: 12px;
  background: ${props => props.theme.colors.white};
`
export const Background = styled.img`
  object-fit: contain;
`

export const Content = styled.div`
  background: ${DEBUG_MODE ? '#ff000066' : 'transparent'};
  max-width: 1024px;
  height: 100%;
`

export const LaLigaLogo = styled.img`
  width: 92px;
  height: 29px;
  background: ${DEBUG_MODE ? 'purple' : 'transparent'};
`

export const NavBar = styled.div`
  width: 100%;
  height: 65px;
  background: ${props => props.theme.colors.black};
  border-bottom: 3px solid ${props => props.theme.colors.purple};
  position: relative;
  ${Title} {
    position: absolute;
    left: 167px;
    top: 30px;
  }
  ${Historical} {
    position: absolute;
    right: 45px;
    top: 30px;
  }
  ${ClubImage} {
    position: absolute;
    right: 145px;
    top: 13px;
  }
  ${Separator} {
    position: absolute;
    right: 130px;
    top: 29px;
  }
  ${LaLigaLogo} {
    position: absolute;
    left: 45px;
    top: 19px;
    background: ${DEBUG_MODE ? 'orange' : 'transparent'};
  }
  ${Background} {
    position: absolute;
    width: 100%;
    height: 943px;
    top: -380px;
    left: 0px;
    opacity: 0.2;
  }

  ${Content} {
    overflow: hidden;
    position: relative;
    margin: 0 auto;
  }
`
