import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import RootNavigation from './navigation'

const App = RootNavigation


export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: "green",
  },
});
