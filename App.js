import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";

import firebase from "./src/services/firebaseConnection";
import Routes from './src/routes/index';

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}