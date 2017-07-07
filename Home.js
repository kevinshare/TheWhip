import React from 'react';
import Expo from 'expo';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  // Notice these imports:
  TextInput,
  TouchableHightLight,
  TouchableOpacity

} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import { Icon } from 'react-native-elements';
import { Components } from 'expo';
import { SearchBar} from 'react-native-search-bar';


 
export default class HomeScreen extends React.Component {


  static route = {
    navigationBar: {
      visible: true,
    },
  }
  // componentDidMount() {
  //   this.fetchData();
  // }
  constructor() {
      super();
      this.state = {
        searchText: '',
        inputText: 'Search A Location'
      };
  }


  setSearchText(event) {
    let searchText = event.nativeEvent.text;
    this.setState({searchText});
  }

  


         

  render() {
    return (
      <View style={styles.container}>  
        <View style={styles.header}>
            <Text style={styles.headerText}>Whip</Text>
        </View>

        <View style={styles.search}>
         <TextInput
          style={styles.searchBar}
          value={this.state.searchText}
          onChange={this.setSearchText.bind(this)}
          placeholder='Search A Location' />
        </View>

        <View style={styles.map}>
          <Components.MapView
            style={{flex: 1}}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
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
    backgroundColor: 'black',

  },

  // Our header
  map:{
    flex: 4

  },
  search:{
    flex: .5

  },
  searchBar: {
    flex: .3,
    backgroundColor: 'white',
    paddingLeft: 30,
    fontSize: 22,
    height: 10,
    flex: .3,
    color: 'white',
    marginTop:0,
    borderWidth: 1,
    borderColor: 'black'
  },
  header: {
    flex: .5,
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
    
    height: 60,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
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