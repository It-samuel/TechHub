import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomNav from "../screens/BottomTabs";
import { Icon } from "react-native-elements";
import { colors } from "../components/colors";

import DrawerHeader from "../screens/DrawerHeader";
import DrawerContent from "@react-navigation/drawer";
import Connections from "../screens/Connections";
import Help from "../screens/Help";
import Settings from "../screens/Settings";
import MyPhotos from "../screens/MyPhotos";
import HomeScreen from "../screens/HomeScreen";
import HomeHeader from "../screens/HomeHeader";
import Videos from "../screens/Videos";
import Events from "../screens/Events";



const Drawer = createDrawerNavigator()

export default function DrawerNav({navigation}){
    return(
        <Drawer.Navigator  drawerContent= { (props) => <DrawerHeader {...props} />} >
            
            <Drawer.Screen 
                name="BottomTab"
                component={BottomNav}


                options={
                    {
                        title:'Home',
                        headerShown: false,
                        drawerIcon:({focussed,size})=>(
                            <Icon 
                                type="material-community"
                                name="home"
                                color={focussed ? '#7cc' :colors.gray2}
                                size={size}
                            />

                        )
                    }
                }
            />
            <Drawer.Screen 
                name="Events"
                component={Events}


                options={
                    {
                        title:'Events',
                        headerShown: false,
                        drawerIcon:({focussed,size})=>(
                            <Icon 
                                type="material-community"
                                name="calendar-month-outline"
                                color={focussed ? '#7cc' :colors.gray2}
                                size={size}
                            />

                        )
                    }
                }
            />
            <Drawer.Screen 
                name="MyPhotos"
                component={MyPhotos}


                options={
                    {
                        title:'My photos',
                        headerShown: false,
                        drawerIcon:({focussed,size})=>(
                            <Icon  
                                type="material-community"
                                name="image"
                                color={focussed ? '#7cc' :colors.gray2}
                                size={size}
                            />

                        )
                    }
                }
            />
            <Drawer.Screen 
                name="MyVideos"
                component={Videos}


                options={
                    {
                        title:'My Videos',
                        headerShown: false,
                        drawerIcon:({focussed,size})=>(
                            <Icon  
                                type="material-community"
                                name="video"
                                color={focussed ? '#7cc' :colors.gray2}
                                size={size}
                            />

                        )
                    }
                }
            />
            <Drawer.Screen 
                name="Connections"
                component={Connections}


                options={
                    {
                        title:'Connections',
                        headerShown: false,
                        drawerIcon:({focussed,size})=>(
                            <Icon 
                                type="material-community"
                                name="account-multiple-plus-outline"
                                color={focussed ? '#7cc' :colors.gray2}
                                size={size}
                            />

                        )
                    }
                }
            />
            <Drawer.Screen 
                name="Settings"
                component={Settings}


                options={
                    {
                        title:'Settings',
                        headerShown: false,
                        drawerIcon:({focussed,size})=>(
                            <Icon 
                                type="material-community"
                                name="cog-outline"
                                color={focussed ? '#7cc' :colors.gray2}
                                size={size}
                            />

                        )
                    }
                }
            />
            <Drawer.Screen 
            name="Help"
            component={Help}


            options={
                {
                    title:'Help',
                    headerShown: false,
                    drawerIcon:({focussed,size})=>(
                        <Icon 
                            type="material-community"
                            name="chat-question"
                            color={focussed ? '#7cc' :colors.gray2}
                            size={size}
                        />

                    )
                }
            }
        /> 
        
            
        </Drawer.Navigator>
    )
}