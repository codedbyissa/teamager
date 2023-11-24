
import { App } from "../../styles/home/index.style";
import { TasksService } from "../../services/tasks.service";
import { ProjetcsService } from "../../services/projects.service";
import { useRef, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../../shared/components/topBar";
import {Drawer} from "../../shared/components/drawer";
import { FlashList } from "@shopify/flash-list";
import { shortcutTasks, shortcutProjects} from "../../shared/components/shortcuts";
import { getTheme } from "../../styles/themes/theme";
import CalendarPicker from 'react-native-calendar-picker';

const Home = () => {
  
  const navigation = useNavigation<any>(); 

  const [tasks, setTasks]:any = useState([]);
  const [projects, setProjects]:any = useState([]);

  useEffect(() => {
    const datas = async () => {
      try {
        const dataTasks = await TasksService.getTaks();
        setTasks(dataTasks);
        const dataProjects = await ProjetcsService.getProjects();
        setProjects(dataProjects);
      } catch (error) {
        console.error(error);
      }
    };

    datas();
    
  }, []);

  return (
    <App.main> 
      <TopBar/>
      <Drawer/>
      <App.content>

        <App.welcomeUser>

          <App.userImageConteiner>
            <App.userImage source={{uri: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHwxNXx8bWFufGVufDB8fHx8MTY5ODc5OTIzOHww&ixlib=rb-4.0.3&q=80&w=1080" }} resizeMode="contain"/>
          </App.userImageConteiner>

          <App.welcomeConteiner>
            <App.welcomeText> Bem-Vindo,</App.welcomeText>
            <App.userFullName> Yuri Matheus </App.userFullName>
            <App.teamName> SpaceTech </App.teamName>
          </App.welcomeConteiner>

        </App.welcomeUser>

        <App.shortcuts>
          <App.shortcutsXY>

            <App.shortcutY>
              <App.shortcutInfos>
                <App.shortcutTitle>Calendário</App.shortcutTitle>
                <App.shortcutDescription>Calendário de eventos e compromissos</App.shortcutDescription>
                <App.calendar>
                <CalendarPicker width={170}
                textStyle={{
                  fontSize: 12,
                  color: getTheme().colors.primary,
                }}
                monthTitleStyle={{
                  fontSize: 13,
                  color: getTheme().colors.primary,
                }}
                yearTitleStyle={{
                  fontSize: 13,
                  color: getTheme().colors.primary,
                }}
                previousTitle="<<"
                nextTitle=">>"
                nextTitleStyle={{
                  fontSize: 16,
                  right: 10,
                  color: getTheme().colors.primary,
                }}
                previousTitleStyle={{
                  fontSize: 16,
                  left: 10,
                  color: getTheme().colors.primary,
                }}
                todayTextStyle={{
                  color: "#fff"
                }}
                selectedDayStyle={{
                  backgroundColor: getTheme().colors.primary
                }}
                selectedDayTextColor="#fff"
                todayBackgroundColor={getTheme().colors.secondary}
                selectMonthTitle="Selecione o mês "
                selectYearTitle="Selecione o ano"
                weekdays={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
                months={['JAN', 'FEV', 'MAR', 'ABR', 'MAI','JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']}
                />
                </App.calendar>
               
              </App.shortcutInfos>
            </App.shortcutY>

              {/* Tasks */}

            <App.shortcutY> 
              <App.shortcutInfos>
                <App.shortcutTitle>Tasks</App.shortcutTitle>
                <App.shortcutDescription>Tarefas pendentes com o prazo perto de expirar</App.shortcutDescription>
              </App.shortcutInfos>

              <App.tasks>
              <FlashList
              ref={useRef<FlashList<number> | null>(null)}
              keyExtractor={(item: any) => {
                return item.id.toString();
              }}
              data={tasks}
              estimatedItemSize={tasks.length}
              renderItem={shortcutTasks}/>
              </App.tasks>
            </App.shortcutY> 

          </App.shortcutsXY>

            {/* Projects */}

          <App.shortcutX>
              <App.shortcutInfos>
                <App.shortcutTitle>Projetos destacados</App.shortcutTitle>
                <App.shortcutDescription>Projetos favoritados por você</App.shortcutDescription>
              </App.shortcutInfos>
              <App.projects>
              <FlashList
              horizontal={true}
              ref={useRef<FlashList<number> | null>(null)}
              keyExtractor={(item: any) => {
                return item.id.toString();
              }}
              data={projects}
              estimatedItemSize={projects.length}
              renderItem={shortcutProjects}/>
              </App.projects>
          </App.shortcutX>

        </App.shortcuts>

        

      </App.content>
    </App.main>
  );
}


export default Home
