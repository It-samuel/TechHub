import React from  "react";
import { SafeAreaView, TextInput,StatusBar } from "react-native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { colors } from "../components/colors";
import { withBadge, Icon, } from "@rneui/base";
import DrawerNav from "../Navigation/DrawerNav";
import { Badge } from "react-native-elements";


export default function HomeHeader ({navigation}){

const BadgeIcon  = withBadge(1)(Icon)

    return(
        <SafeAreaView>
            <StatusBar barStyle = "light-content" backgroundColor={colors.primary} />
            <View style={styles.container}>
                
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {navigation.openDrawer()}}>
                    <Image source={require("../Images/user.png")}
                        style={{height: 35, width:50,marginRight:15 }}
                        resizeMode="contain" />
                    </TouchableOpacity>
                    
                        
                    <View style={styles.search}>
                        
                        <View style={styles.searchText}>
                            
                            <TextInput placeholder="search here "
                            style={{marginLeft:20}}
                            />
                        </View>
                        </View>
                            <View style={styles.searchbtn}>
                                
                            <Image source={require("../Images/find.png")}
                                style={{height: 26, width:26,   }}
                                resizeMode="contain" />
                            
                            </View>
                            
                    <TouchableOpacity >
                    <Image source={require("../Images/notification.png")}
                        style={{height: 25, width:50, marginLeft:5 }}
                        resizeMode="contain"
                        
                        />
                        <Badge
                        status="error"
                        containerStyle={{ position: 'absolute', top:1, right:15 }}
                        />
                    </TouchableOpacity>
                    
                        
                        
                    
                
                
                </View>
                
            </View>
        </SafeAreaView>
    )   
}


const styles = StyleSheet.create({
    container:{
        
    },
    header:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-evenly',
        padding:15,
        borderColor:colors.grey2,
        width:'100%',
        height:66,
        borderWidth:1
    },
    search:{
        height:35,
        width:150,
        
        borderColor:colors.grey2,
        flexDirection:'row',
        borderWidth:1,
        borderTopLeftRadius:40,
        borderBottomLeftRadius:40
    },
    searchText:{
        marginLeft:10,
        marginTop:5,
        
    },
    searchbtn:{
        height:35,
        width:45,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:colors.grey2,
        borderBottomRightRadius:30,
        borderTopRightRadius:30
    }
})