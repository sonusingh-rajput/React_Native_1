import { View, Text } from 'react-native'
import React from 'react'

const ValidPassword = () => <Text>Valid Passwords</Text>
const InvalidPassword = () => <Text>Invalid Passwords</Text>

const Password = ({isPassword}) => {
   isPassword ? <ValidPassword /> : <InvalidPassword />
}
const Conditional = () => {
  return (
    <View>
      <Text>Conditional</Text>
      <Password isPassword={true} />
    </View>
  )
}

export default Conditional