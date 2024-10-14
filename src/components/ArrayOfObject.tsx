import {  FlatList, Text, View } from 'react-native'
import React from 'react'

const ArrayOfObject = () => {
    const location = [
        {
            id: 1,
            city: "London",
        },
        {
            id: 2,
            city: "Paris",
        },
        {
            id: 3,
            city: "New York",
        },
        {
            id: 4,
            city: "Sydney",
        },
        {
            id: 5,
            city: "Tokyo",
        }
    ]
  return (
    <View>
     <FlatList keyExtractor={(ele) => ele.id.toString()} data={location} renderItem={(ele) => {return <Text>{ele.item.city}</Text>}} />
    </View>
  )
}

export default ArrayOfObject
