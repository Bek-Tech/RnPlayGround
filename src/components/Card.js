import React from 'react'
import { View , Text , StyleSheet, TouchableOpacity,Image} from 'react-native'

const Card = ({imgSource}) => {
    return (
        <Image
        resizeMode="contain"
        style={styles.card}
        source={imgSource}
      />
    )
}


export default Card

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
    },
    card: {
        width: "97%",
        height: "97%",
        borderRadius: 30,
      },
})