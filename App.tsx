import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Login from './screens/Login'
import Home from './screens/Home'

const RootStack = createStackNavigator(
  {
    Login: Login,
    Home: Home
  },
  {
    initialRouteName: "Login",
    headerMode: 'none'
    
  }
);

const AppContainer = createAppContainer(RootStack);
export default function App() {
    return <AppContainer />;
  
}
