import React from "react";
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

                 <View style={{flex: 1, flexDirection: "row",justifyContent: "space-around"}}>
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
            <Text style = {{color: 'black', fontSize: 20, fontWeight: '600', marginLeft: 140}}>
                PRICE:
            </Text>
            <Text style= {{marginTop: -30, fontWeight: '500', color:'orange', marginLeft:220, fontSize: 20}}>
                $70
                </Text> 
                <Text style = {{color: 'black', fontSize: 15, fontWeight: '600', marginLeft: 100}}>
                SIZE: MEDIUM COLOUR: GREY
            </Text>
                <TouchableOpacity
            onPress={() =>{
                navigation.navigate("Addtocart")
            }}
                style = {{backgroundColor: 'orange', 
                borderRadius: 10,
                flexDirection: "row",
                padding: 10, 
               
                paddingHorizontal: 20,
                marginTop: 10
        }}
                >
             <Text style = {{fontSize: 20, color: 'black', marginLeft: 100}}> ADD TO CART</Text>
            </TouchableOpacity>

            <Image
            style={{
                width: 200,
                height: 215,
                borderRadius: 10, 
                marginTop: 20,
                marginLeft:95
            }}
             source = {{
                 uri: "data:image/jpeg;base64,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"
                 }}/>
                 <Text style = {{color: 'black', fontSize: 20, fontWeight: '600', marginLeft: 160}}>
                SINASA 
            </Text>
            <Text style = {{color: 'black', fontSize: 20, fontWeight: '600', marginLeft: 140, }}>
                PRICE:
            </Text>
            <Text style= {{marginTop: -30, fontWeight: '500', color:'orange', marginLeft:220, fontSize: 20}}>
                $140
                </Text> 
                <Text style = {{color: 'black', fontSize: 15, fontWeight: '600', marginLeft:80}}>
                SIZE: MEDIUM COLOUR: BLUE BLACK
            </Text>
                <TouchableOpacity
            onPress={() =>{
                navigation.navigate("Addtocart")
            }}
                style = {{backgroundColor: 'orange', 
                borderRadius: 10,
                flexDirection: "row",
                padding: 10, 
               
                paddingHorizontal: 20,
                marginTop: 10
        }}
                >
             <Text style = {{fontSize: 20, color: 'black', marginLeft: 100}}> ADD TO CART</Text>
            </TouchableOpacity>

            <Image
            style={{
                width: 200,
                height: 200,
                borderRadius: 10, 
                marginTop: 30,
                marginLeft:95
            }}
             source = {{
                 uri: "data:image/jpeg;base64,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"
                 }}/>
                 <Text style = {{color: 'black', fontSize: 20, fontWeight: '600', marginLeft: 140}}>
                WILLIE-GEE
            </Text>
            <Text style = {{color: 'black', fontSize: 20, fontWeight: '600', marginLeft: 140}}>
                PRICE:
            </Text>
            <Text style= {{marginTop: -30, fontWeight: '500', color:'orange', marginLeft:220, fontSize: 20}}>
                $150
                </Text> 
                <Text style = {{color: 'black', fontSize: 15, fontWeight: '600', marginLeft: 100}}>
                SIZE: MEDIUM COLOUR: RED
            </Text>
                <TouchableOpacity
            onPress={() =>{
                navigation.navigate("Addtocart")
            }}
                style = {{backgroundColor: 'orange', 
                borderRadius: 10,
                flexDirection: "row",
                padding: 10, 
               
                paddingHorizontal: 20,
                marginTop: 10
        }}
                >
             <Text style = {{fontSize: 20, color: 'black', marginLeft: 100}}> ADD TO CART</Text>
            </TouchableOpacity>

<Image
            style={{
                width: 200,
                height: 200,
                borderRadius: 10, 
                marginTop: 30,
                marginLeft:95
            }}
             source = {{
                 uri: "https://p.globalsources.com/IMAGES/PDT/BIG/955/B1183431955.png"
                 }}/>
                 
                 <Text style = {{color: 'black', fontSize: 20, fontWeight: '600', marginLeft: 140}}>
                OKUKUSEKU
            </Text>
            <Text style = {{color: 'black', fontSize: 20, fontWeight: '600', marginLeft: 140}}>
                PRICE:
            </Text>
            <Text style= {{marginTop: -30, fontWeight: '500', color:'orange', marginLeft:220, fontSize: 20}}>
                $40
                </Text> 
                <Text style = {{color: 'black', fontSize: 15, fontWeight: '600', marginLeft: 100}}>
                SIZE: SMALL COLOUR: TURQUOISE
            </Text>
                <TouchableOpacity
            onPress={() =>{
                navigation.navigate("Addtocart")
            }}
                style = {{backgroundColor: 'orange', 
                borderRadius: 10,
                flexDirection: "row",
                padding: 10, 
               
                paddingHorizontal: 20,
                marginTop: 10
        }}
                >
             <Text style = {{fontSize: 20, color: 'black', marginLeft: 100}}> ADD TO CART</Text>
            </TouchableOpacity>
                </ScrollView>
                 </View>


           
      </View>
      
     
      
    
    );
  };

  
  
