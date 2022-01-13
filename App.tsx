import Home from "./screens/Home";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/AuthScreens/LoginScreen";
import SignupScreen from "./screens/AuthScreens/SignupScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
    Home: Home,
  },
  {
    initialRouteName: "Login",
    headerMode: "none",
  }
);

const AppContainer = createAppContainer(RootStack);
export default function App() {
  console.disableYellowBox = true;
  return <AppContainer />;
}
