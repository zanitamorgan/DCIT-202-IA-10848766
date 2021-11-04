import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, { useState } from 'react';
import Login from "./screens/Login";
import Home from './screens/Home';
import GmailLogin from './screens/GmailLogin';
import Cart from './screens/Cart';
import SignUpPage from './screens/SignUpPage';
import Addtocart from './screens/Addtocart'

export default function App() {
  const MainNavigator = createStackNavigator();

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <MainNavigator.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
          <MainNavigator.Screen name = "Home" component={Home} />
          <MainNavigator.Screen name = "Login" component={Login} />
          <MainNavigator.Screen name = "GmailLogin" component={GmailLogin} />
          <MainNavigator.Screen name = "SignUpPage" component={SignUpPage} />
          <MainNavigator.Screen name = "Cart" component={Cart} />
          <MainNavigator.Screen name = "Addtocart" component={Addtocart} />
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

