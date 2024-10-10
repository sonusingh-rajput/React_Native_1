import { View , Text, Button, Image } from "react-native";

const CardComponents = () => {
    const carPrice = "$200,000";
    const imageWidth = 420;
    const imageHeight = 300;
    const fontSize = 20;
    const cartRating = 4.9
    return (
        <View >
            <Button title={carPrice} color={"green"} />
            <Image source={{uri:"https://images.unsplash.com/photo-1604054089545-8a6c21c2c7d7?q=80&w=3325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} style={{width:imageWidth,height:imageHeight, objectFit:"fill"}} />
            <View style={{display:"flex", alignItems:"center" , justifyContent:"space-between", flexDirection:"row" , padding:10 }} >
                <Text style={{fontSize:fontSize , fontWeight:"bold"}}>Range Rover</Text>
                <Text style={{fontSize:fontSize , fontWeight:"bold", color:"green"}}>Rating: {cartRating}</Text>
            </View>
            <Text style={{fontSize:14,textAlign:"center" ,padding:20}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quo.</Text>
            <Button title="Add to Cart" color={"#000"} />
        </View>
    )
}

export default CardComponents