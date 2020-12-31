import React,{useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image,Dimensions } from "react-native";
import { createNativeWrapper } from "react-native-gesture-handler";
import {Card }from "../components/Card";
import Selector from "../components/Selector";


const WIDTH = Dimensions.get('window').width

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

  const layoutsConfig= {
    row:{
      parent:{ 
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
      },
      child:{ 
      },
      cardWidth: WIDTH/imgSources.length
    },
    column: {
     parent:{ flexDirection: "column"},
     child:{flex:1},
     cardWidth: WIDTH -70
    },
    wrap: {
      parent:{
      flexDirection: 'row',
      flexWrap: "wrap" ,
      alignItems: 'center',
      },
      child:{
        flex:0,
      },
      cardWidth: WIDTH/2
      
    }

  }

  return (
    <View style={styles.container}>
      <View  style={[styles.cardListContainer,{...layoutsConfig[currentLayout].parent}]}>
        {imgSources.map((item) => {
          return (
            <View key={item.id} style={[styles.cardContainer,{...layoutsConfig[currentLayout].child}]}>
              <Card imgSource={item.source} cardWidth={layoutsConfig[currentLayout].cardWidth} />
            </View>
          );
        })}
      </View>
      <View style={styles.selectorsListContainer} >
            {selectorsArr.map(item=>{
                return <Selector
                key={item.id}
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
    margin:5
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
