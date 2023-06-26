import React from "react";
import { View, Text, StyleSheet, Image,StatusBar } from "react-native";
import { colors } from "../components/colors";
import { TouchableOpacity } from "react-native";
import HomeScreen from "../screens/HomeScreen";



export default function OnboardingScrn ({navigation}){
    return(
        <View style={styles.container}>
        
        <View style={styles.image}>
            <Image source={require("../Images/onboard.png")}
            style={{height: 200, width:"100%" , }}
            resizeMode="contain" />
        </View>
        <View >
            <Text style={styles.text}>...Building Bridges to the Future</Text>
        </View>
        <View style={styles.button}>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Login')}
            style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:"#5ae4a8", fontSize:18,fontWeight:'bold'}}>Get Started</Text>
                <Image source={require("../Images/right-arrow.png")}
            style={{height: 30, width:30 , marginLeft:16 }}
            resizeMode="contain" />
            </TouchableOpacity>
        </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.primary1,
        
        
    },
    image:{
        alignContent:'center',
        justifyContent:'center',
        marginTop:150
    },
    text:{
        fontSize:15,
        fontWeight:'bold',
        marginLeft:110
    },
    button:{
        position:'absolute',
        bottom:0,
        margin:60,
        borderRadius:15,
        backgroundColor:'white',
        height:55,
        width:250,
        alignItems:'center',
        justifyContent:'center',
        

    }
})