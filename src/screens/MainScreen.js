import React from 'react'
import { View , Text , StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import {screensList} from '../../navigation'

const MainScreen = ({navigation}) => {
    return (
        <View style= {styles.container}>
        <FlatList
            data={screensList}
            style={styles.navContainer}
            keyExtractor={(item)=>item}
            renderItem={({item})=>{
                return <TouchableOpacity onPress={()=>navigation.navigate(item)}>
             <Text style={styles.navText} >{item}</Text>
        </TouchableOpacity>
            }}
        />
        
        </View>
    )
}


export default MainScreen

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    navContainer: {
    },
    navText:{
        color: 'blue',
        fontSize: 25
    }
})