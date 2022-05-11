import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import MyStackNavigator from "./Navigation/myStackNavigator";
import MainTabNavigator from "./Navigation/MainTabNavigator";
import LoginStackNavigator from "./Navigation/LoginStackNavigator";
import React from "react";

export default function App() {
  return (
    <NavigationContainer>
      <LoginStackNavigator/>
    </NavigationContainer>
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
