import styled from 'styled-components/native';
import { getTheme } from "../themes/theme";

export const App = {
  
  conteiner: styled.View`
    background-color: ${getTheme().colors.primary};
    height: 60px;
    width: 100%;
    position: absolute;
    top: 50px
  `,


}
