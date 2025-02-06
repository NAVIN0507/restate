import { Link } from "expo-router"
import React from "react"
import {Text , View} from "react-native"
export default function Index(){
    return (
        <View style={{flex:1 , justifyContent:"center" , alignItems:"center"}}>
            <Text className="font-bold text-3xl font-rubik-light">Welcome to restate</Text>
           <Link href="/sign-in">Sign In</Link>
           <Link href="/explore">Explore</Link>
           <Link href="/profile">Profile</Link>
           
           <Link href="/properties/1">Properties</Link>
        </View>
    )
}