import { FlatList, Text, View } from "react-native";

const ListData = () => {
  const fruits = ["Apple", "Banana", "Orange", "Mango", "Watermelon"];
  return (
    <View>
      <Text>List Data Fuits</Text>
      <View>
        <FlatList
          data={fruits}
          keyExtractor={(ele) => ele}
          renderItem={(ele) => {
            return <Text>{ele.item}</Text>;
          }}
        />
      </View>
    </View>
  );
};

export default ListData;
