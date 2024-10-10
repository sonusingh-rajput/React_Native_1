import { View, Text } from "react-native";
import React from "react";
import TextComponents from "../components/TextComponents";
import ViewComponents from "../components/ViewComponents";
import ButtonComponents from "../components/ButtonComponents";
import ImageComponents from "../components/ImageComponents";
import MyProfileComponents from "../components/MyProfileComponents"

const index = () => {
  return (
    <View>      
      <TextComponents />
      <ViewComponents />
      <ButtonComponents />
      <ImageComponents />
      <MyProfileComponents />
    </View>
  );
};

export default index;
