import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import Animated,{Value,cond, eq,Clock,add ,startClock, interpolate, useCode, Extrapolate, set, not} from 'react-native-reanimated'

const CardOpacity = () => {
  const clock = new Clock()
  const startAnimation= new Value(0)
  const startTime= new Value(0)
  const duration= 1000
  const endTime=add(startTime,duration)
  const from = new Value(1)
  const to= new Value(0)
  const opacity = interpolate(clock,{
    inputRange: [startTime,endTime],
    outputRange:[from, to],
    extrapolate: Extrapolate.CLAMP,
  })

  useCode(()=>[
    cond(eq(startAnimation,1),[
      startClock(clock),
      set(startTime, clock),
      set(from,not(from)),
      set(to,not(to)),
      set(startAnimation,0)

    ])
  ],[clock,from,startAnimation,startTime,from,to])


  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
      <Animated.View  style= {[styles.cardContainer,{opacity}]} >
      <Image
          style={[styles.card]}
          source={require("../../assets/examples/card4.jpg")}
        />
      </Animated.View>
        
      </View>

      <View style={styles.bottomContainer}>
        <Button title='toggleOpacity' 
          onPress={()=>startAnimation.setValue(1)}
        />
      </View>
    </View>
  );
};

export default CardOpacity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer:{
    flex: 7,
    justifyContent: "center",
    alignItems: "center",    
  },
  bottomContainer:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",    
  },
  card: {
    width: "100%",
    borderRadius: 30,
    height: "100%",
  },
  cardContainer:{
    width: "90%",
    borderRadius: 30,
    height: "25%",
  }
});
