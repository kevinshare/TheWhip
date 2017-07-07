import React from 'react';
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
import {
  StackNavigator,
} from 'react-navigation';
import { Icon } from 'react-native-elements';


export default class Settings extends React.Component {
  // static navigationOptions = {
  // //title: 'Welcome',
  // }
  render(){
    return(

    	<View style={styles.header}>
            <Text style={styles.headerText}>Whip</Text>
         

        
            <Text style={styles.headerText}>My Settings</Text>
        </View>
     
         
     
    );
  }

  

    
}
const styles = StyleSheet.create({

  // Our primary container
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },

  // Our header
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },

  // Our header text
  headerText: {
    fontSize: 36,
    color: 'white'

  },

  homeText: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,

  },

  // Our input container
  inputContainer: {
    flex: 2,
    margin: 50,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#20B2AA',
    borderRadius: 100

  },

  // Our textInput
  textInput: {
    marginLeft:10,
    marginRight:10,
    height: 60,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e2e2e2',
    marginBottom: 30
   

    
  },
  textInput2: {
    marginLeft:10,
    marginRight:10,
    height: 60,
    textAlign: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e2e2e2',
    marginBottom: 30
    

    
  },

  // Our setter button
  setterLogin: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 5,
    marginBottom: 30
  },
   setterSignUp: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 5,
    marginBottom: 30
  },

  // The text of our setter button
  setterText:{
    fontSize: 16,
    color: 'white'
  },

  // Our message container
  messageContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: 'black'
  },

  // Our message revealer button
  revealer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  // The text of our message revealer button
  revealerText: {
    color: 'white',
    padding: 3,
    fontWeight: '600'
  },

  // Our message sub-container (which houses the actual message)
  subMessageContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },

  // The text of the message
  messageText: {
    color: 'white',
    fontSize: 20
  },

  // Our footer
  footer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },

  // The text in our footer
  footerText: {
    color: 'white'
  }
});