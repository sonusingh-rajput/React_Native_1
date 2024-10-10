import { Text, View } from "react-native";

const DynamicContent = () => {
  const UserName = "Sonu Singh";
  const multiply = (a: number, b: number) => a * b;
  const profile = {
    name: "Sonu",
    age: 23,
    profaction:"Engineer"
  }
  return (
    <View>
      <Text>My Name is {profile.name} my age is {profile.age} & my Profaction is {profile.profaction}.</Text>
      <Text> 2 * 2 = {multiply(2,2)}</Text>
    </View>
  );
};

export default DynamicContent;
