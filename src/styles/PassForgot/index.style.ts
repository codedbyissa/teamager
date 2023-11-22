import styled from 'styled-components/native';
import { getTheme } from "../themes/theme";

export const App = {
  
  main: styled.View`
    background-color: ${getTheme().background.main};
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  content: styled.View`
    padding: 10px;
    width: 90%;
  `,

  logo: styled.View`
    margin-top: 30px;
  `,

  logoImage: styled.Image`
    height: 180px;
    width: auto;
  `,

  logoText: styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  title: styled.Text`
    font-size: 45px;
    line-height: 50px;
    font-family : 'Outfit_600SemiBold';
    color: ${getTheme().background.text}
  `,

  subtitle: styled.Text`
    font-size: 17px;
    line-height: 17px;
    font-family : 'Outfit_400Regular';
    color: ${getTheme().background.text};
  `,

  form: styled.View`
    width: 100%;
    margin-top: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,


  instrucion: styled.View`
    display: flex;
    align-items: center;
    margin-bottom: 20px
  `,

  instrucionText: styled.Text`
  font-size: 36px;
  line-height: 45px;
  font-family : 'Outfit_600SemiBold';
  color: ${getTheme().background.text}
`,

  instrucionText2: styled.Text`
  font-size: 16px;
  line-height: 17px;
  font-family : 'Outfit_400Regular';
  color: ${getTheme().background.text};
`,

  field: styled.TextInput`
  height: 50px;
  width: 100%;
  background-color: ${getTheme().background.main};
  padding: 15px;
  margin-bottom: 16px;
  border-radius: 30px;
  elevation: 2
  `,

  submit: styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100%;
  background-color: ${getTheme().colors.primary};
  border-radius: 12px;
  margin-top: 10px;
  elevation: 2
  `,

  submitText: styled.Text`
  font-size: 20px;
  color: #fff;
  font-family : 'Outfit_600SemiBold';
  `,

  goTo: styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  `,

  goToText: styled.Text`
  font-size: 20px;
  color: ${getTheme().background.text};
  font-family : 'Outfit_400Regular';
  `,

  goToLink: styled.Text`
  font-size: 20px;
  color: ${getTheme().colors.primary};
  font-family : 'Outfit_600SemiBold';
  `,


}
