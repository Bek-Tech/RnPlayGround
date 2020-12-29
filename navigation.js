import React from 'react';
import { createAppContainer , createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CardOpacityScreen from './src/screens/CardOpacityScreen'
import MainScreen from './src/screens/MainScreen'




const AppNavigator = createStackNavigator({
 Main: MainScreen,
 CardOpacity : CardOpacityScreen
});

export default createAppContainer(AppNavigator);