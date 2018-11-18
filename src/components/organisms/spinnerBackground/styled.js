import styled, { css } from 'styled-components'

export const ItemContentStyled = styled.div`

    color : ${ props => props.theme.white };
    ${ props => props.yellow && css` color: ${ props => props.theme.darkGrey }; ` }

    padding: 30px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: ${ props => ( props.center ? 'center' : 'flex-start' ) };
    @media only screen and ( min-width : 48em ) { 
        padding: 10px;
    }
`

export const ItemImageStyled = styled.figure`
    object-fit: contain;
    object-position: center;
    flex: 1 1 100%;
    padding: 10px;
        /* @media only screen and ( min-width : 48em ) {   */
            flex: 0 0 110px;
            padding: 0 10px;
         /* } */
`

export const ItemImageStyledImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: 90px;
`

export const ItemTitleStyled = styled.p`
    flex: 1 1 100%;
    font-size: 16px;
    line-height: 20px;
    margin: auto;
    z-index: 1;
    user-select: none;
    pointer-events: none;
    padding: 15px;
    border-left: 2px solid #fff;

    font-family : CoreSans;
    margin: 0;
    display: inline-block;
    text-align: center;
    
    flex: 0 0 auto;
    border-left: 2px solid #fff;
    border-top: none;
    
    text-align: initial;

         @media only screen and ( min-width : 48em ) {  
            padding: 7px 10px;
         } 
`
