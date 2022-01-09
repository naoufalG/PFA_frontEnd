import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import styles from '../components/styles';
import { Text, View } from '../components/Themed';

export default function TabProjectTaskList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tache</Text>
      <TaskInput/>
      <TaskList/>
    </View>
  );
}

