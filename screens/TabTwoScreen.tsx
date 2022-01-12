import { StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import styles from '../components/styles';

export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projet</Text>
      <TaskInput page={"projet"}/>
      <TaskList page={"projet"}/>
    </View>
  );
}


