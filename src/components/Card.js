import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import Animated from "react-native-reanimated";

const { width } = Dimensions.get("window");
const CARD_ASPECT_RATIO = 1324 / 863;


const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
  },
  flexibleContainer: {
    flex: 1,
    maxWidth: "100%",
    aspectRatio: CARD_ASPECT_RATIO,
    margin: 5,
    borderRadius: 18,
    resizeMode: "contain",
  },
});

export const Card = ({ imgSource,cardWidth = width }) => {
   const CARD_WIDTH = cardWidth -10;
   const CARD_HEIGHT = CARD_WIDTH / CARD_ASPECT_RATIO;


  return (
    // <View style={styles.container} >
    <Image
      resizeMode="contain"
      style={[
        styles.container,
        {
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
        },
      ]}
      source={imgSource}
    />
    // </View>
  );
};

export const FlexibleCard = ({ imgSource, style }) => (
  <Animated.Image
    style={[styles.flexibleContainer, style]}
    source={imgSource}
  />
);

// const styles = StyleSheet.create({
//   container: {
//       overflow: "hidden",
//       width: "97%",
//       height: "97%",
//       borderRadius: 30
//   },
//   card: {
//     width: "100%",
//     height: "100%"
//   },
// });
