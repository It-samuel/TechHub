import React from "react";
import { View, Text, StyleSheet,StatusBar,Dimensions, TouchableOpacity, TextInput, Image } from "react-native";
import { colors } from "../components/colors";



export default function Login ({navigation}){
    return(
        <View style={{backgroundColor:colors.grey1, flex:1, }}>
            
            <StatusBar barStyle = "light-content" backgroundColor={colors.primary} />
            <View style={{bottom:87}}>
            <View style={styles.container}>
                <Image source={require("../Images/Logo.png")}
                style={{height: 150, width:150, }}
                resizeMode="contain" />
                <Text style={{color:'white', fontSize:17, bottom:35 }}>Fill The Below Information To Log in</Text>
            </View>
            
            <View style={styles.Login}>
                <Text style={styles.loginText}>Login Account</Text>
                <View style={{marginTop:30}}>
                        <TextInput 
                        placeholder="Enter your Email"
                        style={styles.textInput}
                        underlineColorAndroid={'transparent'}
                        />
                        <TextInput 
                        placeholder="Password"
                        style={styles.textInput}
                        underlineColorAndroid={'transparent'}
                        />
                        <View style={{
                        height: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <TouchableOpacity activeOpacity={0.4}>
                        <Text style={{color:'#25a5db', fontWeight:'bold',marginVertical:20, marginLeft:-110}}>Forgot Password</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.loginbtn}  activeOpacity={0.8} onPress={() => navigation.navigate('DrawerNav')}>
                            <Text style={{color: 'white',fontSize: 16, }}> Login</Text>
                        </TouchableOpacity>
                        <Text style={{bottom: 33}}>   Login with</Text>
                    
                    </View>
                        
                    
                    <View style={{alignSelf:'center', paddingBottom:15, flexDirection:'row'}}>
                        <TouchableOpacity activeOpacity={0.4}>
                        <Image source={require('../Images/facebook.png')}
                        style={{height:50, width:50, margin:8 ,}}
                        
                        />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.4}>
                        <Image source={require('../Images/google-plus.png')}
                        style={{height:50, width:50, margin:8,}}
                        
                        />
                        </TouchableOpacity>
                        
                    </View>
                    
                    
                    
                    </View>
            </View>
            <View style={{alignItems:'center', bottom:95}} >
                <Text style={{fontSize:14, fontWeight:'bold'}} >Don't have an Account?</Text>
                <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.navigate('SignUp')}>
                <Text style={{color:'#25a5db', fontWeight:'bold'}}>Register</Text>
                </TouchableOpacity>
                
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
        backgroundColor:colors.primary,
        height: '50%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
        
    },
    Login:{
        bottom:120,
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
    loginbtn:{
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
    textInput:{
        borderBottomColor: 'black',
        alignSelf: "stretch",
        borderBottomWidth: 1,
        color: 'black',
        height: 30,
        marginBottom: 25,
        marginHorizontal:35
    },
    socialBtn:{
        borderRadius: 50,
        alignSelf: 'center', 
        flexDirection: 'row',
        bottom: 27
    }
})