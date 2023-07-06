import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import HomeScreen from "./HomeScreen";
import Chats from "./Chats";
import Groups from "./Groups";
import Profile from "./Profile";
import { colors } from "../components/colors";


const BottomTabs = createBottomTabNavigator();
export default function BottomNav(){
    return(
        
        <BottomTabs.Navigator
                        tabBarOptions = {{
                            activeTintColor :colors.primary
                        }}
                        
                
                >
            <BottomTabs.Screen 
                name="Home"
                component={HomeScreen}
                options={
                    {  
                        tabBarLabel : "Home" ,
                        headerShown: false,
                        tabBarIcon : ({color}) => (
                            <Icon 
                                name="home"
                                type="material"
                                color={color}
                                
                            />
                        )
                    }
                }
            />
            <BottomTabs.Screen 
                name="Groups"
                component={Groups}
                options={
                    {
                        tabBarLabel : "Forums" ,
                        headerShown: false,
                        tabBarIcon : ({color}) => (
                            <Icon 
                                name="account-multiple"
                                type="material-community"
                                color={color}
                            />
                        )
                    }
                }
            />
            <BottomTabs.Screen 
                name="Chats"
                component={Chats}
                options={
                    {
                        tabBarLabel : "Chats" ,
                        headerShown: false,
                        tabBarIcon : ({color}) => (
                            <Icon 
                                name="chat"
                                type="material"
                                color={color}
                            />
                        )
                    }
                }
            />
            <BottomTabs.Screen 
                name="Profile"
                component={Profile}
                options={
                    {
                        tabBarLabel : "Profile" ,
                        headerShown: false,
                        tabBarIcon : ({color}) => (
                            <Icon 
                                name="person"
                                type="material"
                                color={color}
                            />
                        )
                    }
                }
            />
            
        </BottomTabs.Navigator>
        
    )
}