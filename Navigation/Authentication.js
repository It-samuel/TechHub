import React from "react";
import { View, Text, StyleSheet, } from "react-native";
import OnboardingScrn from "../screens/OnboardingScrn";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "../screens/SplashScreen";
import { NavigationContainer } from '@react-navigation/native';
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import HomeScreen from "../screens/HomeScreen";
import BottomNav from "../screens/BottomTabs";
import DrawerNav from "./DrawerNav";
import EditProfile from "../screens/EditProfile";



const Stack = createNativeStackNavigator();
export default function Authentication (){
    return(
        <View style={{flex:1}}>
            <Stack.Navigator>
                <Stack.Screen 
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="OnboardingScrn"
                    component={OnboardingScrn}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="SignUp"
                    component={SignUp}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="DrawerNav"
                    component={DrawerNav}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="EditProfile"
                    component={EditProfile}
                    options={{
                        headerShown: false
                        
                    }}
                />
            </Stack.Navigator>
        </View>
    )
}


