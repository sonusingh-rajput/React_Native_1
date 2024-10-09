import { Button, View } from "react-native";

const ButtonComponents = () => {
    return (<View>

        <Button title="Learn More" color='#841584' disabled />
        <Button title="View More" onPress={() => alert
        ("Button Cicked")}></Button>

    </View>)
    
}

export default ButtonComponents