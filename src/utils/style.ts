import { StyleSheet } from "react-native";

const st = StyleSheet.create({
    testHeading:{
        color:"#fff",
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        letterSpacing:2,
        fontFamily:"monospace",
        backgroundColor:"blue",
        padding:10,
        marginTop:5,
        marginBottom:10,
        borderRadius:5
    },

    shadow:{
        backgroundColor:"#fff",
        borderRadius:5,
        shadowColor:"green",
        shadowOpacity:0.5,
        shadowOffset:{width:5, height:5},
        shadowRadius:5,
        elevation:5
    }
    ,
    textStyle:{
        
        borderRadius:10,
        padding:10,
        margin:5,
        borderColor:"black",
        borderWidth:1,
        fontSize:16,
        letterSpacing:0.5,
        marginBottom:5
    },

    imageStyle:{
        width:550,
        height:350,
        borderRadius:5,
        marginTop:50
    },

    flexStyle:{
        display:"flex",
        flexDirection:"column",
        gap:10,
        alignItems:"center",
        justifyContent:"center",
        padding:20


}

    
})

export default st