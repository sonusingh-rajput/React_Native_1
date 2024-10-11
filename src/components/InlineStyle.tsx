import { Text, View } from "react-native";

const InlineStyle = () => {
    return(
        <View style={{display:"flex" , flexDirection:"column" ,gap:10}}>
            <Text style={{color:"red"}}>Inline Style</Text>
            <View style={{backgroundColor:"red", height:150,width:150}}></View>
            <View style={{backgroundColor:"green", height:150,width:150}}></View>
            <View style={{backgroundColor:"yellow", height:150,width:150}}></View>
            <View style={{backgroundColor:"pink", height:150,width:150}}></View>
        </View>
    )
}

export default InlineStyle