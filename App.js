import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import HomeScreen from './screens/HomeScreen'
import EncourageScreen from './screens/encourage'
import Gallery from './screens/gallery'
import NewsScreen from './screens/news'
import Respect from './screens/respect'
import MainPage from "./screens/mainPage"
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({
  MainPage:MainPage,
  HomeScreen:HomeScreen,
  EncourageScreen:EncourageScreen,
  Gallery:Gallery,
  NewsScreen:NewsScreen,
  Respect:Respect
})
const AppContainer = createAppContainer(AppNavigator)

