import { View, Text } from 'react-native'
import React from 'react'
import ChildComponents from './ChildComponents'

const ParrentComponent = () => {
  return (
    <View>
      <Text>ParrentComponent</Text>
      <ChildComponents name="Sonu Singh" age={27} address="Noida" />
    </View>
  )
}

export default ParrentComponent