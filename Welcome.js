import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

import firebase from './Firebase';

export default class Welcome extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Details',
    }

    componentWillMount() {
        //Configurating firebase with api Key, authDomain, DB Name, etc:
        // Firebase.init();
    }

    render(){
        const { navigation } = this.props;
        const firebaseUser = firebase.auth().currentUser;
        const pass = navigation.getParam('password', '');
        return(
            <View style={styles.container}>
                <Text style={styles.details}>Welcome! Your Email is: {firebaseUser.email}</Text>
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
    details: {
        color: '#fff'
    }
});

export { Welcome };