import { View, Text } from "react-native";
import React from "react";
import TextComponents from "../components/TextComponents";
import ViewComponents from "../components/ViewComponents";
import ButtonComponents from "../components/ButtonComponents";

const index = () => {
  return (
    <View>      
      <TextComponents />
      <ViewComponents />
      <ButtonComponents />
    </View>
  );
};

export default index;
