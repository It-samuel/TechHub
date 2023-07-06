import React from "react";
import { View, Text, StyleSheet,Image, ScrollView } from "react-native";
import Swiper from "react-native-swiper";
import HomeHeader from "../screens/HomeHeader";
import { colors } from "../components/colors";
import { TouchableOpacity } from "react-native";


export default function HomeScreen(){
    return(
        <View style={{flex:1}}>
            <HomeHeader />
            <ScrollView>
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
                <Text style={styles.header}>Activity</Text>
            </View>
            <View>
                <Text>
                What is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, andWhat is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, andWhat is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, andWhat is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, andWhat is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, andWhat is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, andWhat is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, andWhat is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, andWhat is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, andWhat is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, andWhat is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, andWhat is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, andWhat is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, andWhat is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, andWhat is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, andWhat is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, andWhat is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, andWhat is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, andWhat is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, andWhat is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, andWhat is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, andWhat is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, andWhat is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, andWhat is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, andWhat is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, andWhat is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, andWhat is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, andWhat is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, andWhat is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, andWhat is React Native?
React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. It is based on React, and it brings all its glory to mobile app development.

Both frameworks: ReactJS (web) and React Native were brought to life by Facebook. React Native was a Hackathon project aiming at solving the company’s biggest pain point - maintaining two code bases for their app. The problem with maintaining two code bases for such a big app? Work duplication and, at times, solving the same problem in two different ways. React Native is a straightforward answer to these problems.

React Native uses JavaScript to compile the app’s user interface, but using native-OS views. For more complex features, it allows code implementation in OS-native languages (Swift and Objective-C for iOS, and
                </Text>
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