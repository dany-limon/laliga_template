import styled from 'styled-components/macro'

export const activeExemptionsPanel = styled.div`
  background: ${props => props.theme.colors.purple80};
  table {
    color: ${props => props.theme.colors.white};
    font-size: 15px;
    width: 100%;
    text-align: left;
    padding: 20px 10px;
    thead {
      font-family: ${props => props.theme.fonts.CoreSans600};
    }
    tbody {
      font-family: ${props => props.theme.fonts.CoreSans400};
    }
  }
`
