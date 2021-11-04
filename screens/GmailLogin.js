import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App({navigation}) {
  const [_email, setEmail] = useState("");
  const [_password, setPassword] = useState("");

  return (
    <View style={styles.container}>
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
            <Text style = {{color: 'white', fontSize: 50, fontWeight: '600'}}>
                
                </Text>
                <Text style = {{color: 'white', fontSize: 20, fontWeight: '600'}}>
                Welcome!
                </Text> 
                <Text style = {{color: 'white', fontSize: 20, fontWeight: '600'}}>
               
                </Text>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          type="text"
        value={_email}
          onChangeText={(_email) => setEmail(_email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
        type="text"
        value={_password}
          onChangeText={(_password) => setPassword(_password)}
        />
      </View>

      <TouchableOpacity>
        <Text 
        
        style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress = {() => {
        navigation.navigate("Home")
        }}
      style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
      color: 'white',
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});
