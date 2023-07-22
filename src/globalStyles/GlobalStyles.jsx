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
  display:flex;
   align-items:center;
   justify-content:center;
  height:100vh;
    width:100vw;
    h1{
      font-family: 'Poppins-Bold';
     }
    
     p,a,input,label,h2 {
      font-family: 'Poppins-Regular';
     }
    @media only screen and (max-width: 1280px) {
        height:auto;
        width:auto;
        section{
            width:100%;
            form {
              width:100%;
            }
            .imageContainer {
            
            }
        }
      }
      
      
        
    


  
  

}
`;
