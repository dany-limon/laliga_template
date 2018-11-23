import styled from 'styled-components/macro'

export const CountDown = styled.div`
  max-width: 160px;
  display: flex;
  align-items: center;
  align-self: center;
  background: ${props => (props.type === 'dark' ? props.theme.colors.black : props.theme.colors.white)};
  img {
    width: 20px;
    background: ${props => props.theme.colors.purpleDark};
  }

  span {
    text-align: center;
    color: ${props => (props.type === 'dark' ? props.theme.colors.white : props.theme.colors.black)};
    padding-top: 6px;
    font-family: ${props => props.theme.fonts.CoreSans500};
    flex: 1;
  }
`
