
import { App } from "../../styles/navigations/topbar";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { faGear, faBars, faBell } from '@fortawesome/free-solid-svg-icons';

const TopBar = () => {
  
  const navigation = useNavigation<any>();

  return (
    <App.bar>
      <TouchableOpacity>
        <App.icon icon={ faBars } size={32}/>
      </TouchableOpacity>
      <App.icons>
      <TouchableOpacity>
        <App.icon icon={ faGear } size={32}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <App.alert>
          <App.icon icon={ faBell } size={32}/>
          <App.alertConteiner>
            <App.alertText>+99</App.alertText>
          </App.alertConteiner>
        </App.alert>
      </TouchableOpacity>
      </App.icons>
    </App.bar>
  );
}


export default TopBar