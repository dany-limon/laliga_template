import styled from 'styled-components/macro'

const DEBUG_MODE = false

export const ClubItem = styled.div`
  background: ${DEBUG_MODE ? 'green' : 'transparent'};
  p {
    color: red;
    text-align: ${props => (props.left ? 'left' : 'right')};
    border-bottom: 1px white solid;
    width: 65px;
    margin: 0 auto;
    padding: 2px 0;
    font-family: ${props => props.theme.fonts.CoreSans600};
    font-size: 13px;
    color: ${props => props.theme.colors.white};
  }
  div {
    background: ${DEBUG_MODE ? 'red' : 'transparent'};
    width: 77px;
    height: 77px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }
`

export const ClubItemImage = styled.img`
  width: 55px;
  height: 55px;
`

export const ClubItemSelection = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

export const ValueItem = styled.div`
  background: ${DEBUG_MODE ? 'pink' : 'transparent'};

  p {
    color: ${props => props.theme.colors.white};
    text-align: center;
  }
  p:first-child {
    font-family: ${props => props.theme.fonts.CoreSans400};
    font-size: 12px;
    text-transform: capitalize;
  }
  p:nth-child(2) {
    background: ${DEBUG_MODE ? 'blue' : 'transparent'};
    font-family: ${props => props.theme.fonts.LaLigaDorsal};
    font-size: 80px;
    line-height: 90px;
  }
`
export const Breaches = styled.div`
  display: flex;
  width: 320px;
  padding: 2px;
  background: ${DEBUG_MODE ? 'orange' : 'transparent'};
  ${ValueItem} {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`
