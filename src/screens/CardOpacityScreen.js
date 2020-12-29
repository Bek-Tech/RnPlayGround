import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";

const CardOpacity = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          style={styles.card}
          source={require("../../assets/examples/card1.png")}
        />
      </View>

      <View style={styles.bottomContainer}>
        <Button title='hide' />
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
    width: "90%",
    borderRadius: 30,
    height: "25%",
  },
});
