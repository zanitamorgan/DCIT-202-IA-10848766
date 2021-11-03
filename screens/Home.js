import React, { Component } from 'react'
 import ReactNative from 'react-native'
 import {AppRegistry, Image, TouchableOpacity, ImageBackground, StyleSheet, Button } from "react-native";
 import {AntDesign} from "@expo/vector-icons";
 
 const {
   View,
   Text,
 } = ReactNative

export default class Home extends Component{
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };

render(){
    const { navigate } = this.props.navigation;
  return (
      <View style={styles.container}>
       
             <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white",}}>
            <View>
            <Text style = {{color: 'white', fontSize: 50, fontWeight: '600'}}>
                
            </Text>
            <Text style = {{color: 'white', fontSize: 50, fontWeight: '600'}}>
                
            </Text>
            <Text style = {{color: 'white', fontSize: 50, fontWeight: '600'}}>
                
            </Text>
            <View style={{flexDirection:"column"}}>
            <Text style = {{color: 'black', fontSize: 50, fontWeight: '900'}}>
                The Shopping
            </Text>
            </View>

            <View style={{flexDirection:"row"}}>
            <Text style = {{color: 'brown', fontSize: 50, fontWeight: '900'}}>
                Society
            </Text>
            <Image
            style={{
                width: 70,
                height: 70,
                marginLeft:10
            }}
             source = {{
                 uri: "https://www.pngkit.com/png/detail/22-223312_png-black-and-white-download-burlap-vector-bag.png"
                 }}/>
            </View>
            <View style={{flexDirection:"column"}}>
            <Text style = {{color: 'black', fontSize: 20, fontWeight: '600'}}>
                We have various kinds of products to make you feel good.
            </Text>
            <Text style = {{color: 'white', fontSize: 50, fontWeight: '600'}}>
            </Text>
            <TouchableOpacity
            onPress={() =>navigate('Cart')}
                style = {{backgroundColor: 'orange', 
                borderRadius: 10,
                flexDirection: "row",
                padding: 10, 
                paddingHorizontal: 80
        }}
                >
                   <AntDesign name="arrowright" size={24} color="black" />  
             <Text style = {{fontSize: 20, marginLeft: 10}}>Start Searching' </Text>
            
             </TouchableOpacity>
      </View>
      </View>
      </View>
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
    
        
    
