import React from "react";
import { View, Text, StyleSheet,Image, ScrollView,Dimensions,FlatList } from "react-native";
import Swiper from "react-native-swiper";
import HomeHeader from "../screens/HomeHeader";
import { colors } from "../components/colors";
import { TouchableOpacity } from "react-native";
import JobsCard from "./JobsCard";
import { jobsdata } from "../components/Data";



export default function HomeScreen({navigation}){
    const SCREEN_WIDTH = Dimensions.get('window').width
    return(
        <View style={{flex:1}}>
            <HomeHeader navigation={navigation} />
            <ScrollView >
            <View style={styles.headerTextView}>
                <Text style={styles.header}>Free Courses</Text>
            </View>
            
            <View style={styles.Swiper}>
            <Swiper autoplay= {true}>
                    
                    <TouchableOpacity style={styles.slide1}>
                        <Image 
                            source={require('../Images/SwiperImg/img1.jpg')}  
                            style = {{flex: 1,  height: 290, width: 395, resizeMode: 'cover'  }}
                        />
                        <Text style={{position: 'absolute', fontSize: 45, color:"white"}}>Applied Visual Design</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.slide2}>
                        <Image 
                            source={require('../Images/SwiperImg/img2.jpg')}  
                            style = {{flex: 1,  height: 290, width: 395, resizeMode: 'cover'  }}
                        />
                        <Text style={{position: 'absolute', fontSize: 45, color:"white"}}>Basic CSS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.slide3}>
                        <Image 
                            source={require('../Images/SwiperImg/img3.jpg')}  
                            style = {{flex: 1,  height: 290, width: 395, resizeMode: 'cover'  }}
                        />
                        <Text style={{position: 'absolute', fontSize: 45, color:"white"}}>Basic HTML And HTML5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.slide4}>
                        
                        <Image 
                            source={require('../Images/SwiperImg/img4.jpg')}  
                            style = {{flex: 1,  height: 290, width: 395, resizeMode: 'cover'  }}
                        />
                        <Text style={{position: 'absolute', fontSize: 45, color:"white"}}>Basic Javascript</Text>
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.slide5}>
                        <Image 
                            source={require('../Images/SwiperImg/img5.jpg')}  
                            style = {{flex: 1,  height: 290, width: 395, resizeMode: 'cover'  }}
                        />
                        <Text style={{position: 'absolute', fontSize: 45, color:"white"}}>CSS Flexbox</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.slide6}>
                        <Image 
                            source={require('../Images/SwiperImg/img5.jpg')}  
                            style = {{flex: 1,  height: 290, width: 395, resizeMode: 'cover'  }}
                        />
                        <Text style={{position: 'absolute', fontSize: 45, color:"white"}}>CSS Grid</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.slide7}>
                        <Image 
                            source={require('../Images/SwiperImg/img5.jpg')}  
                            style = {{flex: 1,  height: 290, width: 395, resizeMode: 'cover'  }}
                        />
                        <Text style={{position: 'absolute', fontSize: 45, color:"white"}}>Responsive Web Design</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.slide8}>
                        <Image 
                            source={require('../Images/SwiperImg/img5.jpg')}  
                            style = {{flex: 1,  height: 290, width: 395, resizeMode: 'cover'  }}
                        />
                        <Text style={{position: 'absolute', fontSize: 45, color:"white"}}>StartUp 101</Text>
                    </TouchableOpacity>
                
            </Swiper>
            
            </View>
            
            <View style={styles.headerTextView}>
                <Text style={styles.header}>Job Offers</Text>
            </View>
            <View style={{width:SCREEN_WIDTH,paddingTop:10}}>
            <View>
                <FlatList 
                    style={{marginTop:10, marginBottom:10}}
                    horizontal ={true}
                    showsHorizontalScrollIndicator ={false}
                    data={jobsdata}
                    keyExtractor={(item, index)=>index.toString}
                    renderItem={({item})=>(
                        <View style={{marginRight:5}}> 
                            <JobsCard
                                screenwidth={SCREEN_WIDTH*0.85}
                                jobTitle = {item.jobTitle}
                                jobDescription={item.jobDescription}
                                experience={item.experience}
                                skills={item.skills}
                                clock={item.clock}
                                showsHorizontalScrollIndicator ={false}
                                
                                
                            />
                        </View>
                    )}
                />
            </View>
            </View>
            <View style={styles.headerTextView}>
                <Text style={styles.header}>Activity</Text>
            </View>
            <View style={{borderBottomWidth:1}}>
                <Text style={{alignSelf:'center', fontSize:15, fontWeight:'bold'}}>NewsLetters</Text>
                <Text>Mobile application development is the process of making software for smartphones, tablets 
                and digital assistants, most commonly for the Android and iOS operating systems. 
                The software can be preinstalled on the device, downloaded from a mobile app store or accessed 
                through a mobile web browser. The programming and markup languages used for this kind of 
                software development include Java, Swift, C# and HTML5.
                </Text>
                </View>
            <View style={{borderBottomWidth:1}}>
                <Text  style={{alignSelf:'center', fontSize:15, fontWeight:'bold'}}>Updates</Text>
                <Text>Mobile app development is rapidly growing. From retail, telecommunications and e-commerce to insurance, 
                healthcare and government, organizations across industries must meet user expectations for real-time, 
                convenient ways to conduct transactions and access information. Today, mobile devices—and the mobile 
                applications that unlock their value—are the most popular way for people and businesses to connect to the
                internet. To stay relevant, responsive and successful, organizations need to develop the mobile 
                applications that their customers, partners and employees demand.</Text>
            </View>
            <View style={{borderBottomWidth:1}}>
                <Text style={{alignSelf:'center', fontSize:15, fontWeight:'bold'}}>NewsLetters</Text>
                <Text>Mobile application development is the process of making software for smartphones, tablets 
                and digital assistants, most commonly for the Android and iOS operating systems. 
                The software can be preinstalled on the device, downloaded from a mobile app store or accessed 
                through a mobile web browser. The programming and markup languages used for this kind of 
                software development include Java, Swift, C# and HTML5.
                </Text>
                </View>
            <View style={{borderBottomWidth:1}}>
                <Text style={{alignSelf:'center', fontSize:15, fontWeight:'bold'}}>Updates</Text>
                <Text>Mobile app development is rapidly growing. From retail, telecommunications and e-commerce to insurance, 
                healthcare and government, organizations across industries must meet user expectations for real-time, 
                convenient ways to conduct transactions and access information. Today, mobile devices—and the mobile 
                applications that unlock their value—are the most popular way for people and businesses to connect to the
                internet. To stay relevant, responsive and successful, organizations need to develop the mobile 
                applications that their customers, partners and employees demand.</Text>
            </View>
            </ScrollView>
        </View>
    )
}



const styles = StyleSheet.create({
    slide1:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7ccce8',
        
        
        
    },
    slide2:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide3:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide4:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide5:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide6:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide7:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide8:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Swiper:{
        
        height:200,
        width:'100%',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    headerTextView:{
        backgroundColor:colors.primary1,
        paddingVertical:3
    },
    header:{
        color:colors.gray2,
        fontSize:22,
        fontWeight:'bold',
        paddingLeft:10
    },
})