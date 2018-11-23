import styled from 'styled-components/macro'

export const Item = styled.button`
  height: 39px;
  width: 39px;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  img:first-child {
    height: 26px;
    width: 26px;
  }
  img:nth-child(2) {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }
`

export const ClubSelector = styled.div`
  padding: 20px;
  background: ${props => props.theme.colors.white30};
  display: flex;
  justify-content: center;
`
