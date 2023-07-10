import React from 'react';
import {View, SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import EditProfile from '../screens/EditProfile';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const ProfileScreen = ({navigation}) => {





return (
    <ScrollView>
    <SafeAreaView style={styles.container}>

    <View style={styles.userInfoSection}>
        <View style={{flexDirection:"row", justifyContent:'space-between', alignContent:'flex-end'}}>
        <TouchableOpacity  onPress={() => {navigation.toggleDrawer()}} activeOpacity={0.4} >
            <Icon name="menu"  size={35} style={{marginLeft:-14}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
        <Icon name="account-edit"  size={35}  style={{marginRight:-14}} />
        </TouchableOpacity>
        </View>
        <View style={{flexDirection: "column", marginTop: 15, alignItems:'center',justifyContent:'center'}}>
        <Image source={require("../Images/user.png")}
            style={{height: 80, width:80,marginRight:15 }}
            resizeMode="contain" />
        <View style={{}}>
            <Text style={[styles.title, {
            marginTop:15,
            marginBottom: 5,
            }]}>John kim</Text>
            <Text style={styles.caption}>@Johnkim</Text>
            
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Ilorin, Nigeria</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>+234 900 000 009</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Johnkim@email.com</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Text style={{color:'#25a5db', fontSize:15, fontWeight:'bold'}}>Followers</Text>
            <Text style={{color:'#25a5db', fontSize:15, fontWeight:'bold'}}>0</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={{color:'#25a5db', fontSize:15, fontWeight:'bold'}}>Following</Text>
            <Text style={{color:'#25a5db', fontSize:15, fontWeight:'bold'}}>0</Text>
          </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Your Favorite Courses</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="folder-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Documents</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
        <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
        <View style={styles.menuItem}>
            <Icon name="cog-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Settings</Text>
        </View>
        </TouchableOpacity>
    </View>
    </SafeAreaView>
    </ScrollView>
);
};

export default ProfileScreen;

const styles = StyleSheet.create({
container: {
    flex: 1,
},
userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});