import React, { Component } from 'react'
 import ReactNative from 'react-native'
 import {AppRegistry, Image, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
 import {AntDesign} from "@expo/vector-icons";
 const {
   View,
   Text,
 } = ReactNative

export default class Home extends Component{

render(navigation){
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white",}}>
    <View>
    <Text style = {{color: 'white', fontSize: 50, fontWeight: '600'}}>
        
    </Text>
    <Text style = {{color: 'white', fontSize: 50, fontWeight: '600'}}>
        
    </Text>
    </View>
    </View>
  )
}
}
