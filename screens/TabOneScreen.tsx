import { StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import styles from '../components/styles';
export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tache</Text>
      <TaskInput/>
      <TaskList />
    </View>
  );
}

;
