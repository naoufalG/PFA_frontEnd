import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from './screens/Login'
import Home from './screens/Home'
import TabProjectTaskList from './screens/TabProjectTaskList'


const RootStack = createStackNavigator(
  {
    Login: Login,
    Home: Home,
    TabProjectTaskList: TabProjectTaskList
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
