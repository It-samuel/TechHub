import React from "react";
import { View, Text, StyleSheet, StatusBar,  } from "react-native";
import SplashScreen from "./screens/SplashScreen";
import { colors } from "./components/colors";
import Login from "./screens/Login";
import OnboardingScrn from "./screens/OnboardingScrn";
import Authentication from "./Navigation/Authentication";
import RootNavigator from "./Navigation/RootNavigator";
import SignUp from "./screens/SignUp";

export default function App() {
  return (
    <View style={styles.container}>
      <RootNavigator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
})
