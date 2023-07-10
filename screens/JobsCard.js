import React from "react";
import {View, Text, StyleSheet,} from "react-native";
import { Icon } from "react-native-elements";
import { jobsdata } from "../components/Data";

import { colors } from "../components/colors";


export default function JobsCard({
    jobTitle,
    jobDescription,
    experience,
    skills,
    clock,
    screenwidth
}){
    return(
        <View style={{...styles.container,width:screenwidth}}>
            <View>
                <Text style={{fontSize:15, fontWeight:'bold', marginLeft:8}}>{jobTitle}</Text>
                
            </View>
            <View style={{flexDirection:'row',justifyContent:"space-between", margin:5}}>
                <View >
                    <Text style={{fontWeight:500}}>Time Posted</Text>
                    <Text>{clock} hours ago</Text>
                </View>
                <View>
                    <Text style={{fontWeight:500}}>Experience</Text>
                    <Text>{experience}</Text>
                </View>
            </View>
            <View>
                <Text style={{marginLeft:8, marginBottom:5}}>{jobDescription}</Text>
            </View>
            <Text style={{marginLeft:10, marginBottom:5}}>Skills Required : {skills}</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        marginHorizontal:8,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        borderWidth:1,
        borderColor:colors.gray2,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
    }
})