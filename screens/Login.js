import React from "react";
import { Text, View } from "react-native";

const HelloWorldApp = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        click me to navigate to our main app !
      </Text>
    </View>
  );
};
export default HelloWorldApp;
