import { View } from "react-native";
import { App } from "../../styles/navigations/drawer";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import {Picker} from '@react-native-picker/picker';
import { useState, useEffect } from "react";
import { TeamsService } from "../../services/teams.service";
import { faHome, faUsers, faFolderOpen, faListCheck, faCalendarDays, faBell, faGear, faHeadset, faIndent, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export const Drawer = () => {
  
  const navigation = useNavigation<any>();
  const [teams, setTeams]:any = useState([]);
  const [selectedTeams, setSelectedTeams]:any = useState([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const datas = async () => {
      try {
        const data = await TeamsService.getTeams();
        setTeams(data);
      } catch (error) {
        console.error(error);
      }
    };

    datas();
    
  }, []);
  return (
    <App.container style={{ zIndex: visible? 9 : -1 }}>
      {visible? <App.content>
      <App.drawer>
        <App.logo>
          <App.logoImage source={require('../../../assets/images/icon.png')} resizeMode="contain"/>
        </App.logo>
        <App.selectContainer>
          <App.select selectedValue={selectedTeams}
          onValueChange={(value) => setSelectedTeams(value)}>
            {teams.map((team:any) => {
            return (
              <Picker.Item label={team.name} value={team.id} />
            );
          })}
          </App.select>
        </App.selectContainer>
        <App.items>
          
          <TouchableOpacity>
            <App.item>
              <App.icon icon={ faHome } size={32}/>
              <App.itemName> Home </App.itemName>
            </App.item>
          </TouchableOpacity>

          <TouchableOpacity>
            <App.item>
              <App.icon icon={ faUsers } size={32}/>
              <App.itemName> Teams </App.itemName>
            </App.item>
          </TouchableOpacity>

          <TouchableOpacity>
            <App.item>
              <App.icon icon={ faFolderOpen } size={32}/>
              <App.itemName> Meus Projetos </App.itemName>
            </App.item>
          </TouchableOpacity>

          <TouchableOpacity>
            <App.item>
              <App.icon icon={ faListCheck } size={32}/>
              <App.itemName> Minhas Tasks </App.itemName>
            </App.item>
          </TouchableOpacity>

          <TouchableOpacity>
            <App.item>
              <App.icon icon={ faCalendarDays } size={32}/>
              <App.itemName> Eventos </App.itemName>
            </App.item>
          </TouchableOpacity>

          <App.divider>
          </App.divider>

          <TouchableOpacity>
            <App.notifications>
              <App.notificationsIcon icon={ faBell } size={32}/>
              <App.notificationsItemName> Notificações </App.notificationsItemName>
              <App.alertConteiner>
                <App.alertText>29</App.alertText>
              </App.alertConteiner>
            </App.notifications>
          </TouchableOpacity>

          <TouchableOpacity>
            <App.item>
              <App.icon icon={ faGear } size={32}/>
              <App.itemName> Configurações </App.itemName>
            </App.item>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <App.item>
              <App.icon icon={ faArrowRightFromBracket } size={32} color={"#f44336"}/>
              <App.itemName style={{ color: '#f44336'}}> Sair </App.itemName>
            </App.item>
          </TouchableOpacity>

          <App.bottomContainer>
            <TouchableOpacity>
              <App.userContainer>
                <App.userImageConteiner>
                    <App.userImage source={{uri: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHwxNXx8bWFufGVufDB8fHx8MTY5ODc5OTIzOHww&ixlib=rb-4.0.3&q=80&w=1080" }} resizeMode="contain"/>
                </App.userImageConteiner>
                <App.userInfos>
                  <App.userName>Yuri Matheus</App.userName>
                  <App.userEmail>yuri_matheus@gmail.com</App.userEmail>
                </App.userInfos>
              </App.userContainer>
            </TouchableOpacity>
            <TouchableOpacity>
              <App.closeDrawer icon={ faIndent } size={25}/>
            </TouchableOpacity>
          </App.bottomContainer>
        </App.items>
      </App.drawer> 
    </App.content> : null }
    </App.container>
  );
}
