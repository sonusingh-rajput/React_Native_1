import { View, Text } from "react-native";
import React from "react";
import Name from "../components/Name";
import Age from "../components/Age";
import Social from "../components/Social";
import Love from "../components/Love";

const index = () => {
  return (
    <View>
      <Name />
      <Age />
      <Love />
      <Social />
    </View>
  );
};

export default index;
