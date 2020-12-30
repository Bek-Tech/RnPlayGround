import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import {useValues, useClock} from 'react-native-redash/lib/module/v1'
import Animated,{Value,cond, eq,Clock,add ,startClock, interpolate, useCode, Extrapolate, set, not} from 'react-native-reanimated'




const duration= 1000
 
const CardOpacity = () => {
  const [show, setShow] = useState(true)
  const clock = useClock([]) // preserves values between renders
  const startAnimation= new Value(1)
  const [startTime,from,to]= useValues(0,0,0)  // preserves values between renders  
  const endTime=add(startTime,duration)
  const opacity = interpolate(clock,{
    inputRange: [startTime,endTime],
    outputRange:[from, to],
    extrapolate: Extrapolate.CLAMP,
  })

  useCode(()=>[
    cond(eq(startAnimation,1),[
      startClock(clock),
      set(from,opacity),
      set(to,not(to)),
      set(startTime, clock),
      set(startAnimation,0)
    ])
  ],[clock,from,opacity,startAnimation,startTime,from,to])


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
        <Button title={show?"hide":"show"} 
          onPress={()=>setShow(!show)}
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
