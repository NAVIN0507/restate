import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Propertis = () => {
    const {id}  = useLocalSearchParams();
  return (
    <View>
      <Text>Propertis {id}</Text>
    </View>
  )
}

export default Propertis