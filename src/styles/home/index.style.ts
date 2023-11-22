import styled from 'styled-components/native';
import { getTheme } from "../themes/theme";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export const App = {
  
  main: styled.View`
    background-color: ${getTheme().background.main};
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `,

  content: styled.View`
    width: 90%;
    height: 82%;
    margin-bottom: 10px
  `,

  welcomeUser: styled.View`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  `,

  userImageConteiner: styled.View`
  background-color: ${getTheme().colors.secondary};
  border-radius: 100px;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  `,

  userImage: styled.Image`
  border-width: 3px;
  border-color:  ${getTheme().colors.primary};
  border-radius: 100px;
  width: 112px;
  height: 112px;
  `,

  welcomeConteiner: styled.View`
  margin-top: 10px
  `,

  welcomeText: styled.Text`
  color: ${getTheme().background.text};
  font-size: 25px;
  font-family: "Outfit_600SemiBold";
  `,

  userFullName: styled.Text`
  color: ${getTheme().colors.primary};
  font-size: 35px;
  font-family: "Outfit_700Bold";
  line-height: 40px
  `,

  teamName: styled.Text`
  color: ${getTheme().background.text};
  opacity: 0.6;
  font-size: 20px;
  font-family: "Outfit_600SemiBold";
  position: absolute;
  right: 0;
  bottom: -15px
  `,

  shortcuts: styled.View`
  position: relative;
    width: 100%;
    height: 80%;
    margin-top: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: column;
  `,

  shortcutsXY: styled.View`
    width: 100%;
    height: 46%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
  `,

  shortcutY: styled.View`
    background-color: ${getTheme().background.contrast};
    width: 48%;
    height: 100%;
    border-radius: 12px;
    display: flex;
    align-items: center;
    padding: 0 6px;
    elevation: 1;
  `,

  shortcutX: styled.View`
    background-color: ${getTheme().background.contrast};
    width: 100%;
    height: 46%;
    border-radius: 12px;
    display: flex;
    align-items: center;
    padding: 0 6px;
    elevation: 1;
  `,

  shortcutText: styled.Text`
  color: ${getTheme().background.text};
  font-size: 20px;
  line-height: 20px;
  margin-top: 10px;
  font-family: "Outfit_600SemiBold";
  `,

  instructions: styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  `,

  taskSubText: styled.Text`
  color: ${getTheme().background.text};
  opacity: 0.6;
  font-size: 15px;
  margin-top: 2px;
  font-family: "Outfit_500Medium";
  `,

  tasks: styled.View`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 5px;
  `,

  task: styled.View`
  width: 100%;
  min-height: 80px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  flex-direction: row;
  `,

  taskLine: styled.View`
  width: 4px;
  height: 100%;
  background-color: #FFB300;
  border-radius: 1px;
  `,

  taskInfos: styled.View`
  height: 100%;
  border-radius: 1px;
  margin-left: 8px;
  padding-bottom: 15px
  `,

  taskName: styled.Text`
  color: ${getTheme().background.text};
  opacity: 0.6;
  font-size: 18px;
  font-family: "Outfit_500Medium";
  `,

  time: styled.View`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  `,

  icon: styled(FontAwesomeIcon)`
    color: #FFB300;
    margin-right: 5px;
  `,

  timeText: styled.Text` 
  color: ${getTheme().background.text};
  font-size: 15px;
  font-family: "Outfit_500Medium";
  `,

  status: styled.Text` 
  color: #FFB300;
  font-size: 18px;
  line-height: 18px;
  margin-top: 5px;
  margin-left: 30px;
  font-family: "Outfit_600SemiBold";
  `,

  }
  

