import { createGlobalStyle } from "styled-components";
import colors from "./colorStyles";

export const Font = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
 a {
    font-family: 'Patrick Hand', cursive;
  
}
p{
    font-family: 'Patrick Hand', cursive;
    color: ${colors.darkBlue}; 
}
h1, h2 {
    font-family: 'Balsamiq Sans', cursive;
    color: ${colors.darkBlue};
}`;
