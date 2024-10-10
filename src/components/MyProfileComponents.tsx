import { Button, Image, Text , View } from "react-native";

const MyProfileComponents = () => {
    return(
        <View style={{display:"flex", flexDirection:"column", alignItems:"center" , gap:10 , justifyContent:"center"}}>
            <Image source={require('../assets/My_Image.jpg')} style={{width:150, height:150 , borderRadius:75}} />
            <Text style={{fontWeight:"bold",fontSize:20}}>Sonu Singh Rajput</Text>
            <Text>My Name is Sonu Singh & I love Coding .</Text>
            <Button title="Press Me" />
        </View>
    )
}

export default MyProfileComponents