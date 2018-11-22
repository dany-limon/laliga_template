import styled from 'styled-components/macro'

export const ArrowBackgroundButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 40px;
  background: ${props => props.theme.colors.black};

  img {
    width: 22px;
    height: 18px;
  }
`
