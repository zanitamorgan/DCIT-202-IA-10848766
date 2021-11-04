import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image, SafeAreaView, ScrollView, style, StatusBar, styles} from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";

export default function Cart({navigation}) {

    return (
        <View style={{flex: 1, backgroundColor: "white", paddingHorizontal: 20}}>
            <View style={{flexDirection: 'row', paddingTop: 55, justifyContent:"space-between", alignItems: "center"}}>
                <Ionicons name = "ios-menu-outline" size={28} color = 'black'/>
                <FontAwesome name="shopping-bag" size={24} color="black" />
                <View style = {{flexDirection: 'row'}}>
                <AntDesign name="search1" size={24} color="black" /> 
                <Ionicons name="notifications-outline" size={24} color="black" />
                </View>

      </View>
      <Text style = {{color: 'black', fontSize: 20, fontWeight: '600'}}>
                The Shopping 
            </Text>
            <Text style = {{color: 'brown', fontSize: 20,}}>
                Society
            </Text>
            <Image
            style={{
                width: 20,
                height: 20,
                borderRadius: 10, 
                marginLeft:75,
                marginTop: -25
            }}
             source = {{
                 uri: "https://www.pngkit.com/png/detail/22-223312_png-black-and-white-download-burlap-vector-bag.png"
                 }}/>
                 </View>
    );
                }

  