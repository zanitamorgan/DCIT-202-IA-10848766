import React from "react";
import {View, AppRegistry, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

export default function Checkout({navigation}) {

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
                 <Text>
                     </Text>
                     <Text>
                     </Text>
                     <ScrollView>
                     <Image
            style={{
                width: 200,
                height: 200,
                borderRadius: 10, 
                marginTop: 30,
                marginLeft:95
            }}
             source = {{
                 uri: "data:image/jpeg;base64,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.png"
                 }}/>
                <Text style = {{color: 'black', fontSize: 20, fontWeight: '600', marginLeft: 130}}>
                DOODOO Bag
            </Text>
                 <Text style = {{color: 'black', fontSize: 20, fontWeight: '600'}}>
                     ITEM AMOUNT:
                 </Text>
                 <Text style = {{color: 'orange', fontSize: 20, fontWeight: '600', marginBottom: 50, marginLeft: 300}}>
                     $1111
                 </Text>
                 <Text style = {{color: 'black', fontSize: 20, fontWeight: '600'}}>
                     DELIVERY CHARGE:
                 </Text>
                 <Text style = {{color: 'orange', fontSize: 20, fontWeight: '600', marginBottom: 30, marginLeft: 300}}>
                     $1111
                 </Text>
                     <Text>
                     </Text>
                     <Text>
                     </Text>
                 <Text style = {{color: 'black', fontSize: 20, fontWeight: '600'}}>
                     TOTAL AMOUNT:
                 </Text>
                 <Text style = {{color: 'orange', fontSize: 20, fontWeight: '600', marginBottom: 150, marginLeft: 300}}>
                     $1111
                 </Text>
                 </ScrollView>
      </View>
      );
      }