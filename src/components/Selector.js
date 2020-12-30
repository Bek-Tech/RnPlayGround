import React from 'react'
import { View , Text , StyleSheet, TouchableOpacity,Image} from 'react-native'

const Selector = ({selected, title,onSelect}) => {
    return <TouchableOpacity 
    style={styles.selectorContainer}
    onPress={onSelect}
     >
    <Text
     style={[styles.selectorText,{color:selected?"blue":"black"}]}
     >{title}</Text>
</TouchableOpacity>
}


export default Selector

const styles= StyleSheet.create({
    selectorContainer:{

    }, 
    selectorText:{
        fontSize:25,
    }
})