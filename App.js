/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Alert, Platform, StyleSheet, Text, Button, TextInput, View} from 'react-native';

import {Registration} from './Registration';

//Importing firebase
import * as firebase from 'firebase';

export default class PizzaTranslator extends Component {

//Configurating firebase with api Key and authDomain:
  componentWillMount(){
    const firebaseConfig = {
      apiKey: 'AIzaSyB_3y8kZiW2KzYKlhX0KMHHCOjLToUZ6E4',
      authDomain: 'reactivenativedemo.firebaseapp.com',

    }
    firebase.initializeApp(firebaseConfig);
  }

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    return (
      <View style={styles.container}>

        <Registration />
        {/* <Text style={styles.temp}>Hello World!</Text>
        <TextInput style={{ justifyContent: 'center', alignItems: 'center', fontSize:30, height: 60, width: 260 }} placeholder={'Username'}/>
        <TextInput secureTextEntry={true} style={{ justifyContent: 'center', alignItems: 'center',fontSize:30, height: 60, width: 260 }} placeholder={'Password'}/>
        <Button onPress={this._onPressButton} style={styles.sign_in} title="Sign In" color="#841584"/> */}
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  temp: {
    paddingTop:50,
    textAlign: 'center',
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 30
  },
  sign_in: {
    justifyContent: 'center',
    backgroundColor: 'blue',
    fontWeight: 'bold'
  }
}); 
