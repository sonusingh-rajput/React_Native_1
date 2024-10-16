import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Product from './Product';

const products = () => {
    const products = [
        {
          name: "Classic Blue Denim Jacket",
          image: "https://images.unsplash.com/photo-1719937050679-c3a2c9c67b0f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
          price: 49.99,
          featured: true,
          description: "A stylish, comfortable blue denim jacket perfect for casual wear. Durable fabric with a classic fit.",
        },
        {
          name: "Slim Fit Black Trousers",
          image: "https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww",
          price: 35.99,
          featured: false,
          description: "These slim-fit trousers offer a sleek, professional look with ultimate comfort and flexibility.",
        },
        {
          name: "Leather Brown Boots",
          image: "https://images.unsplash.com/photo-1706293549190-e062ade947a0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww",
          price: 89.99,
          featured: true,
          description: "Premium leather boots designed for rugged use and style, with superior comfort for long hours.",
        },
        {
          name: "Casual White T-Shirt",
          image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
          price: 15.99,
          featured: false,
          description: "A basic white T-shirt, perfect for layering or wearing on its own. Soft, breathable fabric.",
        },
        {
          name: "Elegant Silver Watch",
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2R1Y3QlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
          price: 120.00,
          featured: true,
          description: "An elegant silver watch with a minimalist design. Perfect for both formal and casual occasions.",
        }
      ];

      
  return (
    <View >
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:24 ,marginBottom:10}}>All Products</Text>
      <FlatList data={products} keyExtractor={(item) => item.name.toString()} renderItem={({item}) => (
        <Product name={item.name} image={item.image} price={item.price} description={item.description} featured={item.featured} />
      )} />
    </View>
  )
}

export default products