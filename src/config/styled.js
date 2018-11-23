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

    /* Normalize */
  a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;vertical-align:baseline;outline:0}button:focus,input:focus,select:focus,textarea:focus{outline:0}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}strong{}a{text-decoration:none}textarea{resize:none}.clearfix:after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0}* html .clearfix{height:1%}.clearfix{display:block}*{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;text-shadow: 1px 1px 1px rgba(0,0,0,0.004);-webkit-tap-highlight-color: rgba(0,0,0,0);-webkit-text-size-adjust: 100%;}a.active,a.focus,a.visited,a.hover{ text-decoration: none; }

  /* Form reset */
  input,label,select,button,textarea{margin:0;border:0;padding:0;display:inline-block;vertical-align:middle;white-space:normal;background:none;line-height:1;font-size:13px;font-family:Arial}input:focus{outline:0}input,textarea{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}button,input[type=reset],input[type=button],input[type=submit],input[type=checkbox],input[type=radio],select{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}input[type=checkbox],input[type=radio]{width:13px;height:13px}input[type=search]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}::-webkit-search-decoration{display:none}button,input[type="reset"],input[type="button"],input[type="submit"]{overflow:visible;width:auto}::-webkit-file-upload-button{padding:0;border:0;background:none}textarea{vertical-align:top;overflow:auto}select[multiple]{vertical-align:top}input[type="search"]::-webkit-search-decoration,input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-results-button,input[type="search"]::-webkit-search-results-decoration{display: none;}input,label,select,button,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-border-radius: 0;-moz-border-radius: 0; border-radius: 0;}input[type=range]{-webkit-appearance: none; width: 100%;}input[type=range]::-webkit-slider-thumb {-webkit-appearance: none;}input[type=range]:focus{outline: none;}input[type=range]::-ms-track {width:100%; cursor: pointer; background: transparent; border-color: transparent; color: transparent; }  

  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
`

export const theme = {
  colors,
  fonts
}
