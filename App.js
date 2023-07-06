import React from "react";
import { View, Text, StyleSheet, StatusBar,  } from "react-native";
import SplashScreen from "./screens/SplashScreen";
import { colors } from "./components/colors";
import Login from "./screens/Login";
import HomeScreen from "./screens/HomeScreen";
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
