/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Alert, Platform, StyleSheet, Text, Button, TextInput, View } from 'react-native';

import {
  createStackNavigator,
} from 'react-navigation';

import { Registration } from './Registration';
import { Welcome } from './Welcome';


const App = createStackNavigator({
  Registration: { screen: Registration },
  Welcome: { screen: Welcome }
});

export default App;