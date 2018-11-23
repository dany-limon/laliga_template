import styled from 'styled-components/macro'

export const Item = styled.button`
  background: ${props => (props.selected ? props.theme.colors.black : props.theme.colors.black27)};
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 47px;
  img {
    height: 24px;
  }
`

export const DivisionSelector = styled.div`
  padding: 2;
  display: flex;
`
