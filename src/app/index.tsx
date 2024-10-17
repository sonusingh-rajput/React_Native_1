import { View, Text } from "react-native";
import React from "react";
import Products from "../components/Products";
import Conditional from "../components/Conditional";

const index = () => {
  return (
    <View style={{padding:20}}>      
     <Conditional />      
    </View>
  );
};

export default index;
