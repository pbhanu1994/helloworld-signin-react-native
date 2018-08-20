/** @format */
import React, { Component } from 'react';
import {AppRegistry, StyleSheet,
    Text,
    View,
    TextInput,
    Alert,
    TouchableOpacity} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Registration } from './Registration';
export default class PizzaTranslator extends Component {
  
    render() {
      return (
        <View style={styles.container}>
          <Registration />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#36485F',
      paddingLeft: 60,
      paddingRight: 60,
    }
    // welcome: {
    //   fontSize: 20,
    //   textAlign: 'center',
    //   margin: 10,
    // },
    // instructions: {
    //   textAlign: 'center',
    //   color: '#333333',
    //   marginBottom: 5,
    // },
    // temp: {
    //   paddingTop: 50,
    //   textAlign: 'center',
    //   color: 'grey',
    //   fontWeight: 'bold',
    //   fontSize: 30
    // },
    // sign_in: {
    //   justifyContent: 'center',
    //   backgroundColor: 'blue',
    //   fontWeight: 'bold'
    // }
  });
AppRegistry.registerComponent(appName, () => App);
