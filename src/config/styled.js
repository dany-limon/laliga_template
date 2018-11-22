import { createGlobalStyle } from 'styled-components/macro'
import '../assets/css/fonts.css'
import colors from '../assets/colors'
import fonts from '../assets/fonts'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: white;
    padding:0;
    margin:0;
  }
  p{
    padding:0;
    margin:0;
  }
  span{
    padding:0;
    margin:0;
  }
  button{
    padding:0;
    margin:0;
    border-width: 0;
  }
`

export const theme = {
  colors,
  fonts
}
