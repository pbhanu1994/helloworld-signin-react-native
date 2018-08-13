/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Alert, Platform, StyleSheet, Text, Button, TextInput, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class PizzaTranslator extends Component<Props> {

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>Welcome Bhanu</Text>
        <Text style={styles.instructions}>Prakash</Text>
        <Text style={styles.instructions}>{instructions}</Text> */}

        <Text style={styles.temp}>Hello World!/Text>
        <TextInput style={{ justifyContent: 'center', alignItems: 'center', fontSize:30, height: 60, width: 260 }} placeholder={'Username'}/>
        <TextInput secureTextEntry={true} style={{ justifyContent: 'center', alignItems: 'center',fontSize:30, height: 60, width: 260 }} placeholder={'Password'}/>
        <Button onPress={this._onPressButton} style={styles.sign_in} title="Sign In" color="#841584"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    flex: 1,
    alignItems: 'center',
    //backgroundColor: '#F5FCFF',
    backgroundColor: 'violet',
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
