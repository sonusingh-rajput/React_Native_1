import { View, Text } from 'react-native'
import React from 'react'

interface ChildPops {
    name: string;
    age: number;
    address: string;
}
const ChildComponents = ({name,age,address} : ChildPops) => {  
  return (
    <View>
      <Text>ChildComponents</Text>
      <Text>{name}</Text>
      <Text>{age}</Text>
      <Text>{address}</Text>
      
    </View>
  )
}

export default ChildComponents