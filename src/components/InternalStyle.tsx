import { View, Text, StyleSheet } from "react-native";

const InternalStyle = () => {
    return (
        <View>
            <Text style={stypes.text}>Internal Style</Text>
        </View>
    )
}

const stypes = StyleSheet.create({
    text:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        letterSpacing:2,
        fontFamily:"monospace",
        backgroundColor:"green",
        padding:10,
        marginTop:5
    }
})
export default InternalStyle