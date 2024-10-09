import { Pressable, Text, View } from "react-native";

const ViewComponents = () => {
    return <View>
        <Text>View Components</Text>
        <Pressable onPress={() => alert("ON PRESS")}>
            <Text style={{color:"red" }}>Pressed</Text>
        </Pressable>
        <Pressable onPressIn={() => alert("ON PRESS IN")}>
            <Text style={{color:"blue" }}>ON Press In</Text>
        </Pressable>
        <Pressable onPressOut={() => alert("ON PRESS Out")}>
            <Text style={{color:"green" }}>ON Press Out</Text>
        </Pressable>
        <Pressable onLongPress={() => alert("ON Long Press")}>
            <Text style={{color:"green" }}>ON Long Press</Text>
        </Pressable>

    </View>;
}

export default ViewComponents