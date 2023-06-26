import React from "react";
import { View, Text, StyleSheet, } from "react-native";
import { colors } from "../components/colors";



export default function SignUp(){
    return(
        <View style={{backgroundColor:colors.grey1, flex:1, }}>
            <StatusBar barStyle = "light-content" backgroundColor={colors.primary} />
            <View style={{bottom:87}}>
            <View style={styles.container}>
                <Image source={require("../Images/Logo.png")}
                style={{height: 150, width:150, }}
                resizeMode="contain" />
            </View>
            </View>
        </View>
    )
}