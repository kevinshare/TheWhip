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

class SignUp extends React.Component {
// We make a constructor to initialize our states.
    constructor() {
      super();
      this.state = {
        message: '',
        revealed: false,
        inputText: ''
      };
    }

    // This will set our message to the input text
    // and then change input text to a blank string.
    setMessage() {
      this.setState({
        message: "Welcome",
        inputText: ''
      });
    }

    // This will toggle the display of our message box.
    toggleDisplay() {
      this.setState({
        // The bang returns the negative of revealed.
        // So if revealed is true, it becomes false, 
        // and if it's false, it becomes true.
        revealed: !this.state.revealed
      });
    }

    // Our render function.
    render() {
      // const { navigate } = this.props.navigation;
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

          <Text style={styles.homeText}>User Name: </Text>
            <TextInput
              style={styles.textInput} 
              placeholder='Enter User Name Here'
              onChangeText={(text) => this.setState({ inputText: text })}
              value={this.state.inputText} 
            />

          <Text style={styles.homeText}>Password: </Text>
         
            <TextInput
              style={styles.textInput2} 
              placeholder='Enter UserName Here'
              onChangeText={(text) => this.setState({ inputText2: text })}
              value={this.state.inputText2} 
            />

            {/* The setter button recieves the setMessage function. 
              * Notice how we need to bind 'this', so that the render function
              * can access the state of its component. 
              */}
            <TouchableOpacity style={styles.setter} onSubmit={this.toggleDisplay.bind(this)} onPress={this.setMessage.bind(this)} >
              <Text style={styles.setterText}>Submit</Text>
            </TouchableOpacity>
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
    marginBottom: 10
  },

  // Our input container
  inputContainer: {
    flex: 4,
    margin: 10,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
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
  setter: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#F54678',
    borderRadius: 5
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
export default SignUp;