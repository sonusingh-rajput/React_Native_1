import { View, Text } from "react-native";
import React from "react";
import Challenge1 from "../components/Challenge1";
import Challenge2 from "../components/Challenge2";
import Challenge3 from "../components/Challenge3";


const index = () => {
  return (
    <View>      
       <Challenge1 />
       <Challenge2 />
       <Challenge3 />
    </View>
  );
};

export default index;
