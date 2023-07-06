import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import React from "react";
import {View, Text, StyleSheet, StatusBar, Image, Switch} from 'react-native';
import { colors } from "../components/colors";
import { Icon } from "react-native-elements";



export default function DrawerHeader(props){
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
            <View style={{flex:1}}>
                <View style={{backgroundColor:colors.primary}}>
                    <View style={{ flexDirection: 'row',marginHorizontal:7, paddingVertical:10, alignItems:'center',justifyContent:'center'}}>
                        <Image
                            source={require("../Images/user.png")}
                            style={{height:65, width:65, borderRadius:50, borderColor:'white',borderWidth:2}}
                        />
                        <View >
                            <Text style={{color:'white', fontSize:17, fontWeight:'bold', marginLeft:10}}>John Kim</Text>
                            <Text style={{color:'white', fontSize:17,  marginLeft:10}}>johnKim@gmail.com</Text>
                        </View >
                        
                    </View>
                    <View style={{flexDirection: 'row', justifyContent:"space-evenly", marginRight:25}}>
                            <View style={{ marginHorizontal:7, paddingVertical:10}} >
                                <Text style={{color:'white', alignSelf:'center'}}>0</Text>
                                <Text style={{color:'white', alignSelf:'center'}}>My Favorites</Text>
                            </View>
                            <View style={{top:13}}>
                                <Text style={{color:'white', alignSelf:'center'}}>0</Text>
                                <Text style={{color:'white', alignSelf:'center', }}>Cart Items</Text>
                            </View>
                        </View>
                    
                </View>
            
            </View>
            <DrawerItemList {...props}/>
            <View style={styles.preferences}>
                <Text style={styles.preferencesText}>Preferences</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <Text style={styles.switch}>Switch Theme</Text>
                <Switch />
            </View>
            </DrawerContentScrollView>
            <DrawerItem label="Sign-out"

                    icon={({}) =>(
                        <Icon 
                        
                            type="material-community"
                            name="logout"

                        />
                    )}
                    onpress={() => {}}
                    

            
            />
        </View>
    )
}

const styles = StyleSheet.create({
    preferences:{
        borderTopWidth:3,
        borderTopColor:colors.gray4
    },
    preferencesText:{
        color:colors.gray2,
        fontSize:17,
        fontWeight:'bold',
        paddingLeft:10
    },
    switch:{
        color:colors.gray3,
        fontSize:17,
        fontWeight:'bold',
        paddingLeft:10
    }
})