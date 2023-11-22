import styled from 'styled-components/native';
import { getTheme } from "../themes/theme";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export const App = {
  
  bar: styled.View`
    background-color: ${getTheme().colors.primary};
    height: 60px;
    width: 100%;
    position: absolute;
    top: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
  `,

  icons: styled.View`
  right: 10px;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  `,

  icon: styled(FontAwesomeIcon)`
    color: ${getTheme().background.main};
    left: 10px;
  `,

  alert: styled.View`
  margin-left: 20px;
  right: 10px;
  display: flex;
  flex-direction: row;
  `,

  alertConteiner: styled.View`
    background-color: ${getTheme().colors.secondary};
    height: 20px;
    width: 20px;
    position: absolute;
    right: -15px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  alertText: styled.Text`
  color: #fff;
  font-size: 10px;
  font-weight: 900;
`,


}
