import styled from 'styled-components/macro'

const DEBUG_MODE = false

export const SeasonInfo = styled.div`
  background: ${DEBUG_MODE ? 'red' : 'transparent'};
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 10px;
  img {
    height: 20px;
    margin-right: 20px;
  }
  span {
    padding-top: 4px;
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.CoreSans400};
    font-size: 14px;
  }
`
