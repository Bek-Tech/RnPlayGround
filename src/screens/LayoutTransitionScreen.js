import React,{useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { createNativeWrapper } from "react-native-gesture-handler";
import Card from "../components/Card";
import Selector from "../components/Selector";


const LayoutTransitionScreen = ({}) => {

    const [currentLayout, setCurrentLayout] = useState('column')
  const imgSources = [
    {
      id: 1,
      source: require("../../assets/examples/card1.png"),
    },
    {
      id: 2,
      source: require("../../assets/examples/card2.png"),
    },
    {
      id: 3,
      source: require("../../assets/examples/card3.png"),
    },
  ];

  const selectorsArr = [
    {
      id: 1,
      name: "column",
    },
    {
      id: 2,
      name: "row",
    },
    {
      id: 3,
      name: "wrap",
    },
  ];

  return (
    <View style={styles.container}>
      <View  style={styles.cardListContainer}>
        {imgSources.map((item) => {
          return (
            <View key={item.id} style={styles.cardContainer}>
              <Card imgSource={item.source} />
            </View>
          );
        })}
      </View>
      <View style={styles.selectorsListContainer} >
            {selectorsArr.map(item=>{
                return <Selector
                selected={currentLayout===item.name?true:false } 
                title={item.name}
                onSelect={()=>setCurrentLayout(item.name)}
                />
            })}
      </View>
    </View>
  );
};

export default LayoutTransitionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardListContainer:{
      flex: 5
  },
  selectorsListContainer:{
      flex: 1,
      flexDirection:"row",
      justifyContent: 'space-around',
      alignItems:"center"
  },

});
