import React from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import { colors } from "../components/colors";
import OnboardingScrn from "./OnboardingScrn";



export default function SplashScreen ({navigation}){
    setTimeout(() =>{
        navigation.replace('OnboardingScrn')
    }, 3000)
    return(
        
        <View style={{flex:1}}>
            <StatusBar barStyle = "light-content" backgroundColor={colors.primary} />
        <View style={{alignItems:'flex-start'}}>
            <Image source={require("../Images/design.png")}
            style={{height: 200, width:"100%" ,alignItems:'flex-start' }}
            resizeMode="contain" />
            </View>
        <View style={styles.container}>
            
            
            <Image source={require("../Images/Logo.png")}
            style={{height: 200, width:200 ,}}
            resizeMode="contain"
            
            />
            
        </View>
        <View>
            <Image source={require("../Images/design.png")}
            style={{height: 200, width:"100%" , }}
            resizeMode="contain" />
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:colors.primary1
        
    }
})