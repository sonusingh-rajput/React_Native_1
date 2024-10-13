import { View, Text, Image, Button } from "react-native";
import st from "../utils/style";

const Challenge2 = () => {
    const name="Sonu Singh";
    return (
        <View style={st.flexStyle}>
            <Text style={st.testHeading}>Challenge 2</Text>
            <View style={st.flexStyle}>
                <Image style={st.imageStyle} source={require('../assets/My_Image.jpg')} />
                <Text style={st.textStyle}>{name}</Text>
                <Text style={st.textStyle}>My name is {name} i Love Coding..</Text>
                <Button title="Press Me" />
            </View>
        </View>
    )
}

export default Challenge2