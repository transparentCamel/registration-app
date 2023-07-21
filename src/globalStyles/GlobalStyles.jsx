import { createGlobalStyle } from 'styled-components';
import PoppinsBold from '../assets/fonts/poppins/Poppins-Bold.ttf';
import PoppinsRegular from '../assets/fonts/poppins/Poppins-Regular.ttf';
export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Poppins-Bold';
    src: url(${PoppinsBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins-Regular';
    src: url(${PoppinsRegular}) format('truetype');
    font-weight: regular;
    font-style: normal;
  }

#root{
    @media only screen and (max-width: 1280px) {
        height:auto;
        width:auto;
        display:flex;
        section{
            width:100%;
        }
      }
      @media only screen and (max-width: 640px) {
        form{width:80%;}
      }
        
    height:100vh;
    width:100vw;
display:flex;
   align-items:center;
   justify-content:center;

   h1,h2{
    font-family: 'Poppins-Bold';
   }
   p,a,input,label {
    font-family: 'Poppins-Regular';
   }
  

}
`;
