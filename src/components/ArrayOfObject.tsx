import {  FlatList, Image, Text, View } from 'react-native'
import React from 'react'
import st from '../utils/style';

const ArrayOfObject = () => {
    const products = [
        {
          name: "Classic Blue Denim Jacket",
          image: "https://images.unsplash.com/photo-1719937050679-c3a2c9c67b0f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
          price: 49.99,
          rating: 4.5,
        },
        {
          name: "Slim Fit Black Trousers",
          image: "https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww",
          price: 35.99,
          rating: 4.3,
        },
        {
          name: "Leather Brown Boots",
          image: "https://images.unsplash.com/photo-1706293549190-e062ade947a0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww",
          price: 89.99,
          rating: 4.8,
        },
        {
          name: "Casual White T-Shirt",
          image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
          price: 15.99,
          rating: 4.2,
        },
        {
          name: "Sporty Grey Sneakers",
          image: "https://images.unsplash.com/photo-1508380702597-707c1b00695c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2R1Y3QlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
          price: 55.49,
          rating: 4.6,
        },
        {
          name: "Elegant Silver Watch",
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2R1Y3QlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
          price: 120.00,
          rating: 4.9,
        },
        {
          name: "Vintage Aviator Sunglasses",
          image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3QlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
          price: 39.99,
          rating: 4.4,
        },
        {
          name: "Canvas Laptop Backpack",
          image: "https://images.unsplash.com/photo-1515734674582-29010bb37906",
          price: 65.00,
          rating: 4.7,
        },
        {
          name: "Fitness Tracker Band",
          image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
          price: 29.99,
          rating: 4.5,
        },
        {
          name: "Premium Leather Wallet",
          image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHByb2R1Y3QlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
          price: 24.99,
          rating: 4.3,
        }
      ];
      
      
  return (
    <View>
        <FlatList data={products} renderItem={(ele) => { return(
            <View style={st.flexStyle}>
                <Image  source={{uri: ele.item.image}} style={st.imageStyle} />
                <Text style={st.textStyle}>{ele.item.name}</Text>
                <Text>Rating :{ele.item.rating}</Text>
                <Text>Price ${ele.item.price}</Text>
            </View>
        )}} />
            
    </View>
  )
}

export default ArrayOfObject
