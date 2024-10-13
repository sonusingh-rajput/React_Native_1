import { Button, Image, Text, View } from "react-native";

const Challeng3 = () => {
    const carPrice = "$200,00";
    return (
        <View>
            <Text>Challenge 3</Text>
            <View>
                <Button title={carPrice}/>
                <Image source={{uri:"https://images.unsplash.com/photo-1604054089545-8a6c21c2c7d7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmdlJTIwcm92ZXJ8ZW58MHx8MHx8fDA%3D"}} style={{width:1080, height:400}} />
                <View>
                    <Text>Range Rover </Text>
                    <Text>Rating: 4.9 </Text>
                </View>
                <Text>The Land Rover Range Rover, generally shortened to Range Rover, is a 4x4 luxury SUV</Text>
                <Button title="Add to Cart" />
            </View>
        </View>
    );
}

export default Challeng3;