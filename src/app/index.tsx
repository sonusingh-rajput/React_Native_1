import { View, Text } from "react-native";
import React from "react";
import ListData from "../components/ListData";
import ArrayOfObject from "../components/ArrayOfObject";

const index = () => {
  return (
    <View>      
      <Text>App</Text>
        <ListData />
        <ArrayOfObject />
    </View>
  );
};

export default index;
