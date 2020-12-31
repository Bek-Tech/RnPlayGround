import React,{useState,useRef} from "react";
import { View, Text, StyleSheet,Dimensions,ScrollView } from "react-native";
import {Card }from "../components/Card";
import Selector from "../components/Selector";
import {Transition,Transitioning} from 'react-native-reanimated'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

console.log(WIDTH, HEIGHT)
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
  {
    id: 4,
    source: require("../../assets/examples/card3.png"),
  },
  {
    id: 5,
    source: require("../../assets/examples/card3.png"),
  },

];

const transition = <Transition.Change durationMs={400} interpolation= 'easeIn' />

const LayoutTransitionScreen = () => {

 

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
     child:{flex:0},
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

  const ref=useRef(null)
  const [currentLayout, setCurrentLayout] = useState(layoutsConfig.column)

  return (
    <View style={styles.container}>
    <ScrollView
    style={styles.scrollViewContainer}
    >
      <Transitioning.View  style={[styles.cardListContainer,{...currentLayout.parent}]}
      {...{ref, transition}}
      >
        {imgSources.map((item) => {
          return (
            <View 
            key={item.id} 
            style={[styles.cardContainer,{...currentLayout.child}]}
            >
              <Card imgSource={item.source} cardWidth={currentLayout.cardWidth} />
            </View>
          );
        })}
      </Transitioning.View>
      </ScrollView>
      <View style={styles.selectorsListContainer} >
            {selectorsArr.map(item=>{
                return <Selector
                key={item.id}
                selected={currentLayout===item.name?true:false } 
                title={item.name}
                onSelect={()=>{
                  if(ref.current){
                    ref.current.animateNextTransition()
                  }
                  setCurrentLayout(layoutsConfig[item.name])
                }}
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
  scrollViewContainer:{
    flex:5,
  },
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin:5
  },
  cardListContainer:{
    minHeight: HEIGHT -100
  },
  selectorsListContainer:{
      width:"100%",
      position: 'absolute',
      bottom: 0,
      flexDirection:"row",
      justifyContent: 'space-around',
      alignItems:"center"
  },

});
