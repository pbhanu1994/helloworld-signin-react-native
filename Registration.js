import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    onChangeText,
    Alert,
} from 'react-native';

export default class Registration extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }
    showToConsole(){
        console.log('Pressed');
        Alert.alert('You tapped the button!')
    }
    render(){
        return(
            <View style={styles.registrationForm}>
                <Text style={styles.header}>Registration Form</Text>

                <TextInput style={styles.textinput} placeholder="Your Name" onChangeText={name => this.setState({name})} value={this.state.name}></TextInput>
                <TextInput style={styles.textinput} placeholder="Your Email" onChangeText={email => this.setState({email})} value={this.state.email}></TextInput>
                <TextInput style={styles.textinput}  onChangeText={onChangeText} secureTextEntry={true} placeholder="Your Passwsord" onChangeText={password => this.setState({password})} value={this.state.password}></TextInput>
                <TouchableOpacity style={styles.button} onPress={this.showToConsole}>
                    <Text style={styles.btntext}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

//CSS:
const styles =  StyleSheet.create({
    registrationForm: {
        alignSelf: 'stretch',
    },
    header: {
        fontSize: 30,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 20,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30,
    },
    btntext: {
        color: '#fff',
        fontWeight: 'bold'
    }
});

export{Registration};