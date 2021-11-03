import React from "react";
import {View, AppRegistry, Text, Image, TouchableOpacity } from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function Login({navigation}){
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black",}}>
            <Text style = {{color: '#808080', fontSize: 20, fontWeight: '600'}}>
                Welcome to
                </Text>
            <View>
            <Text style = {{color: 'white', fontSize: 50, fontWeight: '600'}}>
                The Shopping
            </Text>
            </View>

            <View style={{flexDirection:"row"}}>
            <Text style = {{color: 'brown', fontSize: 50,}}>
                Society
            </Text>
            <Image
            style={{
                width: 70,
                height: 70,
                borderRadius: 10, 
                marginLeft:10
            }}
             source = {{
                 uri: "https://www.pngkit.com/png/detail/22-223312_png-black-and-white-download-burlap-vector-bag.png"
                 }}/>
            </View>
            <View style={{flexDirection:"column"}}>
            <Text style = {{color: 'white', fontSize: 50, fontWeight: '600'}}>
                
            </Text>
            <Text style = {{color: 'white', fontSize: 50, fontWeight: '600'}}>
                
            </Text>
            <TouchableOpacity
            onPress = {() => {
            navigation.navigate("Home")
            }}
                style = {{backgroundColor: '#808080', 
                borderRadius: 10,
                flexDirection: "row",
                padding: 10, 
                paddingHorizontal: 40
        }}
                >
                    <AntDesign name="google" size={24} color="rgb(256,10,10)" />
             <Text style = {{fontSize: 20, marginLeft: 10}}> Login with Gmail</Text>
             </TouchableOpacity>
            <TouchableOpacity
            onPress={() =>{
                navigation.navigate("Home")
            }}
                style = {{backgroundColor: 'white', 
                borderRadius: 10,
                flexDirection: "row",
                padding: 10, 
                paddingHorizontal: 40,
                marginTop: 10
        }}
                >
                    <AntDesign name="apple1" size={24} color="black" />
             <Text style = {{fontSize: 20, color: 'black', marginLeft: 10}}> Login with Apple</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity>
            <Text style= {{marginTop: 10, fontWeight: '500', color:'#808080'}}>
             Not a member?{" "} 
             <Text style = {{ color: 'orange'}}>Sign up</Text>
                 </Text>
                 </TouchableOpacity>
        </View>
        
    )
}