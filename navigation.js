import React from 'react';
import { createAppContainer , createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CardOpacityScreen from './src/screens/CardOpacityScreen'
import LayoutTransitionScreen from './src/screens/LayoutTransitionScreen'
import MainScreen from './src/screens/MainScreen'


export const screensList =["CardOpacity","LayoutTransition"]

const AppNavigator = createStackNavigator({
 Main: MainScreen,
 CardOpacity : CardOpacityScreen,
 LayoutTransition:LayoutTransitionScreen,
});

export default createAppContainer(AppNavigator);