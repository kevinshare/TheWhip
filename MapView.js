import React from 'react';
// import { TabNavigator, StackNavigator } from 'react-navigation';
// import { Icon } from 'react-native-elements';
import Expo from 'expo';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  // Notice these imports:
  TextInput,
  TouchableOpacity

} from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Login from './Login';
import HomeScreen from './HomeScreen';
import { Tabs } from './router';


// import { StackNavigator } from 'react-navigation';

export default class MapView extends React.Component {
  // static navigationOptions = {
  // //title: 'Welcome',
  // }
  render(){
    return(
     
         <Tabs />
     
    );
  }

  

    
}
// const SimpleApp = StackNavigator({
//   Home: { screen: HomeScreen },
//   Chat: { screen: ChatScreen },
// });
// onPress={() => navigate('Chat')}
// Our stylesheet


