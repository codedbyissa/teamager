
import { App } from "../../styles/home/index.style";
import { useRef, useState } from "react";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import TopBar from "../../shared/components/topBar";
import { NavigationContainer } from '@react-navigation/native';
import { FlashList } from "@shopify/flash-list";
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import { format, isToday, parseISO } from 'date-fns';



const Home = () => {
  
  const navigation = useNavigation<any>();

  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "name": "cursus,",
      "date": "2023-11-22 17:52:57"
    },
    {
      "id": 2,
      "name": "sit amet,",
      "date": "2023-05-20 01:37:52"
    },
    {
      "id": 3,
      "name": "urna",
      "date": "2023-05-07 08:32:42"
    },
    {
      "id": 4,
      "name": "ultrices posuere cubilia",
      "date": "2023-01-25 06:31:31"
    },
    {
      "id": 5,
      "name": "Aliquam ornare, libero",
      "date": "2023-10-29 02:33:51"
    },
    {
      "id": 6,
      "name": "est arcu",
      "date": "2023-05-18 12:45:56"
    },
    {
      "id": 7,
      "name": "parturient",
      "date": "2023-07-19 00:27:27"
    },
    {
      "id": 8,
      "name": "venenatis a, magna.",
      "date": "2023-08-08 19:27:45"
    },
    {
      "id": 9,
      "name": "tristique neque",
      "date": "2023-09-11 04:35:03"
    },
    {
      "id": 10,
      "name": "Suspendisse aliquet molestie",
      "date": "2023-01-28 15:11:25"
    },
    {
      "id": 11,
      "name": "malesuada. Integer",
      "date": "2023-04-20 21:48:26"
    },
    {
      "id": 12,
      "name": "justo",
      "date": "2023-11-10 08:58:25"
    },
    {
      "id": 13,
      "name": "felis,",
      "date": "2023-11-18 15:10:07"
    },
    {
      "id": 14,
      "name": "ac",
      "date": "2023-09-21 21:29:37"
    },
    {
      "id": 15,
      "name": "mollis nec,",
      "date": "2022-12-15 04:08:50"
    },
    {
      "id": 16,
      "name": "natoque",
      "date": "2023-04-18 21:08:26"
    },
    {
      "id": 17,
      "name": "a",
      "date": "2023-08-01 18:11:13"
    },
    {
      "id": 18,
      "name": "metus vitae",
      "date": "2023-08-14 08:27:18"
    },
    {
      "id": 19,
      "name": "Phasellus at augue",
      "date": "2023-07-17 03:30:16"
    },
    {
      "id": 20,
      "name": "turpis. In",
      "date": "2023-04-14 18:31:00"
    }
  ]);

  const taskItems = ({ item }: { item: any }) => {

    const date = parseISO(item.date);
    const today = isToday(date);
    let formatting;
    if (today) {
      formatting = "'Hoje,' HH:mm";
    } else {
      formatting = "dd MMM, yy - HH:mm";
    }
  
    const formatting_date = format(date, formatting, { locale: require('date-fns/locale/pt') });

    return (
      <TouchableOpacity>
        <App.task>
          <App.taskLine>
          </App.taskLine>
          <App.taskInfos>
          <App.taskName>{item.name}</App.taskName>
          <App.time>
            <App.icon icon={ faHourglassHalf } size={15}/>
            <App.timeText>{ today? formatting_date : (formatting_date).toUpperCase()}</App.timeText>
          </App.time>
          <App.status>em Progresso</App.status>
          </App.taskInfos>
        </App.task>
      </TouchableOpacity>
    );
  };

  return (
    <App.main> 
      <TopBar/>
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
              <App.shortcutText>Calendário</App.shortcutText>
            </App.shortcutY>

            <App.shortcutY> 
              <App.instructions>
                <App.shortcutText>Tasks</App.shortcutText>
                <App.taskSubText>Tarefas pendentes com o prazo perto de expirar</App.taskSubText>
              </App.instructions>

              <App.tasks>
              <FlashList
              ref={useRef<FlashList<number> | null>(null)}
              keyExtractor={(item: any) => {
                return item.id.toString();
              }}
              data={tasks}
              estimatedItemSize={tasks.length}
              renderItem={taskItems}/>
              </App.tasks>
            </App.shortcutY>

          </App.shortcutsXY>

          <App.shortcutX>
              <App.shortcutText>Projetos destacados</App.shortcutText>
          </App.shortcutX>

        </App.shortcuts>

        

      </App.content>
    </App.main>
  );
}


export default Home
