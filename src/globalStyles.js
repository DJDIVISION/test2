import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
       list-style:none;
       
       
   } 

   .title-con{
       text-align: center;
       font-size:40px;
   }

   .gradient-cards-con{
       display: grid;
       grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
       
       
       
   }
`;

export default GlobalStyle;