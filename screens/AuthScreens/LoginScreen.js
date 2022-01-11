/* eslint-disable no-undef */
import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Alert,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { GoogleSignIn } from "expo-google-sign-in";
import FormInput from "../../components/Social/FormInput";
import FormButton from "../../components/Social/FormButton";
import SocialButton from "../../components/Social/SocialButton";
import auth from "@react-native-firebase/auth";
//LoginScreen
const LoginScreen = ({ navigation }) => {
  //Set state for the credentials
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Login function from the firebase user database

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Login App</Text>
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign In"
        onPress={() => navigation.navigate("Home")}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <View>
        <SocialButton
          buttonTitle="Sign In with Facebook"
          btnType="facebook"
          color="#4867aa"
          backgroundColor="#e6eaf4"
          onPress={() => navigation.navigate("Home")}
        />

        <SocialButton
          buttonTitle="Sign In with Google"
          btnType="google"
          color="#de4d41"
          backgroundColor="#f5e7ea"
          onPress={() => navigation.navigate("Home")}
        />
        {Platform.OS === "ios" ? (
          <SocialButton
            buttonTitle="Sign In with Apple"
            btnType="apple"
            color="#ffff"
            backgroundColor="#000000"
            onPress={() => navigation.navigate("Home")}
          />
        ) : null}
      </View>

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#FFFFFF",
  },

  logo: {
    height: 120,
    width: 250,
    resizeMode: "contain",
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: "#d4002f",
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
  },
});
