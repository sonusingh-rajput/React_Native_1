import { View, Text } from "react-native";
import React from "react";
import CardComponents from "../components/CardComponents";
import InlineStyle from "../components/InlineStyle";
import InternalStyle from "../components/InternalStyle";
import ExternalStyle from "../components/ExternalStyle";

const index = () => {
  return (
    <View>      
        <InlineStyle />
        <InternalStyle />
        <ExternalStyle />
    </View>
  );
};

export default index;
