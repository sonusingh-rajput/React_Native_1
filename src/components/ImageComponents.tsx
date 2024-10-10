import { View , Text, Image} from "react-native";

const ImageComponents = () => {
    return <View>

        <Text>Let's Show the Image Components</Text>
        <Image source={require('../assets/Maa Lakshmi Dental Care Logo.jpg')} style={{width: 200 , height:200, alignSelf:"center"}}/>
        <Image source={{uri:"https://images.unsplash.com/photo-1728279320747-e29867b7e455?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} style={{width:200 , height:200 , alignSelf:"center"}} />
    </View>
}

export default ImageComponents