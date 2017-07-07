
import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';
import HomeScreen from './HomeScreen';
import Login from './Login';
import SignUp from './SignUp';

 export const ProgramStack = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'SignUp'
    }
  }

 })

export const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarColor: "#22313F", 
      tabBarHeight: 48,
      tabBarIcon: ({ tintColor, black }) => <Icon name="map" size={35} color={tintColor} backgroundColor ={black} />
    },
  },
  Profile: {
    screen: Profile,
     navigationOptions: {
      tabBarLabel: 'Profile',
      barTintColor:  'black', 
      tabBarIcon: ({ tintColor, black }) => <Icon name="archive" size={35} color={tintColor} backgroundColor ={black} />
    },
  },
  Settings: {
  	screen: Settings,
  	 navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarColor: "#22313F", 
      tabBarHeight: 48,
      tabBarIcon: ({ tintColor, black }) => <Icon name="list" size={35} color={tintColor} backgroundColor ={black} />
    },
  }
});
