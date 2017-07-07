import React, { Component, PropTypes } from 'react';
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
import { Icon } from 'react-native-elements';
// import PropTypes from 'prop-types';
import Login from './Login';
import SignUp from './SignUp';


export default class HomeScreen extends React.Component {

    



    // Our render function.
    render() {

      const { navigate } = this.props.navigation;
      
     
     
      return (

        
                // Container
        <View style={styles.container}>
          
       

          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerText}>Whip</Text>
          </View>

          {/* Our TextInput container. 
            * Notice how whenever the text changes, 
            * we change the inputText state, while the value of the box
            * always correlates with that state. This way, 
            * the text in the box and the inputText state always match.
            */}

          <View style={styles.inputContainer}>

          <Text style={styles.homeText}> Already A User?: </Text>
          
          <TouchableOpacity onPress={() => navigate('Login')} style={styles.setterLogin} >
              <Text style={styles.setterText}> Login </Text>
            </TouchableOpacity>
          
          <Text style={styles.homeText}> If not: </Text>
         
            <TouchableOpacity  onPress={() => navigate('SignUp')} style={styles.setterSignUp}>
              <Text style={styles.setterText}> Sign Up! </Text>
            </TouchableOpacity>

            {/* The setter button recieves the setMessage function. 
              * Notice how we need to bind 'this', so that the render function
              * can access the state of its component. 
              */}
           
          </View>

          {/* The Message Container */}
          <View style={styles.messageContainer}>

            {/* The Revealer Button.
              * Notice how it receieves the toggleDisplay function. 
              * Whenever the user presses the button, 
              * the 'revealed' state changes its bool value.
              */}
         

          </View>

          {/*Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}></Text>
          </View>
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



// export default HomeScreen;