import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';
import {DrawItems} from 'react-navigation-drawer';

export default class CustomSideBarMenu extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={style.drawerItemsContainer}>
                    <DrawItems {...this.props} />
                </View>
                <View style={styles.logOutContainer}>
                    <TouchableOpacity style={styles.logOutButton} onPress={()=>{this.props.navigation.navigate("WelcomeScreen")
                firebase.auth().signOut()}} >
                  <Text style={styles.logOutText}>log out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container : {
      flex:1
    },
    drawerItemsContainer:{
      flex:0.8
    },
    logOutContainer : {
      flex:0.2,
      justifyContent:'flex-end',
      paddingBottom:30
    },
    logOutButton : {
      height:30,
      width:'100%',
      justifyContent:'center',
      padding:10
    },
    logOutText:{
      fontSize: 30,
      fontWeight:'bold'
    }
  })