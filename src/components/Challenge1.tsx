import { View, Text } from "react-native";
import st from "../utils/style";

const Challenge1 = () => {
    const profie ={
        name:"Sonu Singh",
        age:27,
        socila:"@sonu.singh",
        likeSubject:"React Native"
    }
    return (
        <View style={{display:"flex" , justifyContent:"center", alignItems:"center", padding:20}}>
            <Text style={st.testHeading}>Challenge 1</Text>
            <View>
                <Text style={st.textStyle}>My Name is {profie.name}.</Text>
                <Text style={st.textStyle}>I'm {profie.age} year old.</Text>
                <Text style={st.textStyle}>Here is my Linkden Profile {profie.socila}.</Text>
                <Text style={st.textStyle}>I Love {profie.likeSubject}.</Text>
            </View>
        </View>
    );
};

export default Challenge1;