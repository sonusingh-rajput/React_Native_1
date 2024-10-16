import { View, Text, Image, Button } from 'react-native'
import React from 'react'
import st from '../utils/style'

interface ProductProps {
    name:string,
    image:string,
    price:number,
    description:string,
    featured:boolean
}
const Product = (props : ProductProps) => {
    const { name, image, price,description,featured } = props
  return (
    <View style={{display:'flex' , justifyContent:"center",alignItems:"center"}}>
     
        <Image source={{uri:image}} style={st.imageWH} />
      <View>
        <Text>{name}</Text>
        <Text>{price}</Text>
        <Button title="Add to cart" />
        <Text>{description}</Text>
      </View>
    </View>
  )
}

export default Product