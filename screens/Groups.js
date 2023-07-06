import React from "react";
import {View, Text, StyleSheet} from "react-native";


export default function Groups(){
    return(
        <View style = {styles.container}>
            <Text style={{fontSize: 20}}>Groups</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})