import { SplashScreen, Stack } from "expo-router";
import "./global.css"
import React, { useEffect } from "react";
import {useFonts} from "expo-font"
import GlobalProvider from "@/lib/global-povider";
 export default function RootLayout(){
  const [fontsLoaded] = useFonts({
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
 
  });
    useEffect(()=>{
        if(fontsLoaded){
            SplashScreen.hideAsync();
        }
    } , [fontsLoaded]);
    if(!fontsLoaded) return null;
  return (
    <GlobalProvider>
  <Stack screenOptions={{headerShown:false}}/>
  </GlobalProvider>)
 }