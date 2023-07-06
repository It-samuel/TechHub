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



const Drawer = createDrawerNavigator()

export default function DrawerNav(){
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
                name="MyPhotos"
                component={MyPhotos}


                options={
                    {
                        title:'My photos',
                        headerShown: false,
                        drawerIcon:({focussed,size})=>(
                            <Icon  
                                type="material-community"
                                name="domain"
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
                        title:'Promtions',
                        headerShown: false,
                        drawerIcon:({focussed,size})=>(
                            <Icon 
                                type="material-community"
                                name="hand-heart"
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
                            name="help-box"
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