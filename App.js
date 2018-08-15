/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Alert, Platform, StyleSheet, Text, Button, TextInput, View } from 'react-native';

import { Registration } from './Registration';
import { Login } from './Login';


export default class PizzaTranslator extends Component {

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    return (
      <View style={styles.container}>

        <Registration />
        {/* <Login /> */}
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
    paddingTop: 50,
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

AppRegistry.registerComponent('PizzaTranslator', () => PizzaTranslator)