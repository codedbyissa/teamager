import styled from 'styled-components/native';
import { getTheme } from "../themes/theme";
import { Picker } from '@react-native-picker/picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export const App = {

  container: styled.View`
    height: 100%;
    width: 100%;
    position: absolute;
  `,

  content: styled.View`
    background-color: #202124bf;
    height: 100%;
    width: 100%;
  `,

  drawer: styled.View`
    background-color: ${getTheme().background.main};
    height: 100%;
    width: 75%;
    display: flex;
    align-items: center;
    z-index: 9;
  `,
  logo: styled.View`
  width: 100%;
`,

  logoImage: styled.Image`
  width: auto;
  height: 160px;
  margin-top: 50px;
  `,

  selectContainer: styled.View`
  height: 50px;
  width: 80%;
  background-color: ${getTheme().background.contrast};
  margin: 15px;
  border-radius: 30px;
  elevation: 3
  `,

  select: styled(Picker)`
  height: 100%;
  width: 100%;
  `,

  items: styled.View`
  width: 90%;
  margin: 5px;
  `,

  item: styled.View`
  width: 90%;
  padding: 7px;
  margin: 5px;
  display: flex;
  align-items: center;
  flex-direction: row;
  `,

  icon: styled(FontAwesomeIcon)`
    color: ${getTheme().background.text};
    margin-right: 5px;
  `,

  itemName: styled.Text` 
  color: ${getTheme().background.text};
  font-size: 20px;
  font-family: "Outfit_500Medium";
  `,

  divider: styled.View`
  width: 95%;
  opacity: 0.3;
  height: 0.5px;
  background-color: ${getTheme().background.text};
  border-radius: 1px;
  margin: 10px;
  elevation: 1
  `,

  notifications: styled.View`
  background-color: ${getTheme().colors.primary};
  width: 100%;
  padding: 7px;
  margin: 5px;
  display: flex;
  align-items: center;
  flex-direction: row;
  border-radius: 10px;
  `,

  notificationsIcon: styled(FontAwesomeIcon)`
    color: #fff;
    margin-right: 5px;
  `,

  notificationsItemName: styled.Text` 
  color: #fff;
  font-size: 20px;
  font-family: "Outfit_500Medium";
  `,

  alertConteiner: styled.View`
  background-color: ${getTheme().colors.secondary};
  height: 32px;
  position: absolute;
  right: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  `,

  alertText: styled.Text`
  color: #fff;
  margin: 0 5px;
  font-size: 14px;
  font-weight: 900;
  `,

  bottomContainer: styled.View`
  width: 100%;
  margin-top: 15px
  `,

  userContainer: styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  `,

  userImageConteiner: styled.View`
  background-color: ${getTheme().colors.secondary};
  border-radius: 100px;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  `,

  userImage: styled.Image`
  border-width: 2px;
  border-color:  ${getTheme().colors.primary};
  border-radius: 100px;
  width: 65px;
  height: 65px;
  `,

  userInfos: styled.View`
  margin: 0 10px
  `,

  userName: styled.Text` 
  color: ${getTheme().background.text};
  font-size: 20px;
  font-family: "Outfit_500Medium";
  `,
  
  userEmail: styled.Text` 
  color: ${getTheme().background.text};
  opacity: 0.6;
  font-size: 16px;
  font-family: "Outfit_600SemiBold";
  `,

  closeDrawer: styled(FontAwesomeIcon)`
  color: ${getTheme().background.text};
  opacity: 0.6;
  right: 0;
  bottom: -25px;
  position: absolute
`,
  
}
