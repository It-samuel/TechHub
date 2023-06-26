import React from "react";
import { View, Text, StyleSheet, StatusBar,Image,TextInput, TouchableOpacity} from "react-native";
import { colors } from "../components/colors";



export default function SignUp(){
    return(
        <View style={{backgroundColor:colors.grey1, flex:1, }}>
            <StatusBar barStyle = "light-content" backgroundColor={colors.primary} />
            <View >
            <View style={styles.container}>
                <Image source={require("../Images/Logo.png")}
                style={{height: 150, width:150, }}
                resizeMode="contain" />
                <Text style={styles.Register}>Register Now</Text>
            </View>
            
            <View style={styles.Login}>
                <Text style={styles.loginText}>Create Account</Text>
                <View style={{marginTop:30}}>
                    <View>
                        <TextInput 
                        placeholder="Username"
                        style={styles.textInput}
                        underlineColorAndroid={'transparent'}
                        />
                        <TextInput 
                        placeholder="Full name"
                        style={styles.textInput}
                        underlineColorAndroid={'transparent'}
                        />
                        <TextInput 
                        placeholder="Email"
                        style={styles.textInput}
                        underlineColorAndroid={'transparent'}
                        />
                        <TextInput 
                        placeholder="Password"
                        style={styles.textInput}
                        underlineColorAndroid={'transparent'}
                        />
                        <TouchableOpacity style={styles.Signinbtn}  activeOpacity={0.8}>
                            <Text style={{color: 'white',fontSize: 16, }}> SignUp</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
            </View>
        
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        height: '45%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    Login:{
        bottom:100,
        backgroundColor:'white',
        borderRadius:25,
        paddingTop:20, 
        marginHorizontal:25
        
    }, 
    loginText:{
        alignSelf:'center',
        justifyContent:'center', 
        fontWeight:'bold',
        fontSize:19,
    },
    textInput:{
        borderBottomColor: 'black',
        alignSelf: "stretch",
        borderBottomWidth: 1,
        color: 'black',
        height: 30,
        marginBottom: 25,
        marginHorizontal:35
    },
    Signinbtn:{
        alignSelf: 'center',
        backgroundColor: colors.primary,
        borderRadius: 15,
        height: 40,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 38,
        fontSize:15,
        fontWeight:'bold',
        paddingHorizontal:90,
        marginTop:45,
        
        
    },
    Register:{
        bottom:32,
        fontSize:26,
        fontWeight:'bold',
        marginLeft:-110,
        color:'white',
        marginBottom:25
    }
})