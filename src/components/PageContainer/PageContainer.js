import styled from 'styled-components'


export const PageContainer = styled.div`
width: 95%;
height: 100vh;
display: flex;
justify-content: center;
transition: width .5s ease;
flex-direction: column;
gap:.5em;
    >*:nth-child(1){
      flex-basis:10%;
      /* background-color: grey; */
    }
    >*:nth-child(2){
      flex-basis:65%;
      /* background-color: blue; */
    }
    >*:nth-child(3){
      flex-basis:20%;
      /* background-color: green; */
    }
     /* >*:nth-child(4){
      flex-basis:14%;
      
    }  */
@media screen and (min-width:696px){
    width: 75%;
    transition: width .5s ease;
}
@media screen and (min-width:1000px){
    width: 65%;
    transition: width .5s ease;
}
`
export const DetailsContainer = styled.div`
width: 95%;
height: 100vh;
display: flex;
justify-content: center;
/* gap: 0.5em; */

flex-direction: column;
    >*:nth-child(1){
      flex-basis:10%;
      /* background-color:green; */
    }
    >*:nth-child(2){
      flex-basis:70%;
      /* background-color:blue; */
    }
    
@media screen and (min-width:696px){
    width: 75%;
    transition: width .5s ease;
}
@media screen and (min-width:1000px){
    width: 65%;
    transition: width .5s ease;
}
`