import React from 'react'
import { View , Text , StyleSheet, TouchableOpacity} from 'react-native'

const MainScreen = ({navigation}) => {
    return (
        <View style= {styles.container}>
        <TouchableOpacity onPress={()=>navigation.navigate("CardOpacity")}>
             <Text style={styles.navText} >CardOpacity</Text>
        </TouchableOpacity>
        </View>
    )
}


export default MainScreen

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
    },
    navContainer: {

    },
    navText:{
        color: 'blue',
        fontSize: 25
    }
})