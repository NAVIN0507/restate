import { useGlobalContext } from "@/lib/global-povider";
import { Redirect, Slot } from "expo-router";
import React from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppLayout(){
    const {loading , isLoggedIn} = useGlobalContext();
    if(loading){
        return (
            <SafeAreaView className="bg-white h-full flex justify-center items-center">
                <ActivityIndicator className="text-primary-300" size="large"/>
            </SafeAreaView>
        )    
    }
    if(!isLoggedIn) return <Redirect href="/sign-in"/>
    return <Slot/>
}