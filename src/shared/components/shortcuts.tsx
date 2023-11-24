
import { App } from "../../styles/home/index.style";
import { TouchableOpacity } from 'react-native';
import { faHourglassHalf, faHeart } from '@fortawesome/free-solid-svg-icons';
import { format, isToday, parseISO } from 'date-fns';

export const shortcutTasks = ({ item }: { item: any }) => {

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

export const shortcutProjects = ({ item }: { item: any }) => {

  return (
    <TouchableOpacity>
      <App.project>
          <App.projectImage source={{uri: item.image }} resizeMode="cover"/>
          <App.projectContent>
            <App.fav icon={ faHeart } size={25}/>
            <App.projectName>{item.name}</App.projectName>
          </App.projectContent>
        </App.project>
    </TouchableOpacity>
  );
}
