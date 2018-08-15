import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Alert,
    TouchableOpacity
} from 'react-native';

import { Firebase } from './Firebase';

export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    updateValue(text, field) {
        if (field == 'name' && field != "") {
            this.setState({
                name: text,
            })
        }
        else if (field == 'email' && field != "") {
            this.setState({
                email: text,
            })
        }
        else if (field == 'password' && field != "") {
            this.setState({
                password: text,
            })
        }
    }

    componentWillMount() {
        //Configurating firebase with api Key, authDomain, DB Name, etc:
        Firebase.init();
    }

    showToConsole = () => {
        if (this.state.name == "") {
            Alert.alert("Please input the Name field")
        }
        else if (this.state.email == "") {
            Alert.alert("Please input the Email field")
        }
        else if (this.state.password == "") {
            Alert.alert("Please input the Password field")
        }
        //Passing the values to the regInfo object in Firebase.js:
        Firebase.regInfo.name = this.state.name,
        Firebase.regInfo.email = this.state.email,
        Firebase.regInfo.password = this.state.password,

        //Creating User with email and password:
        Firebase.auth.createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function (error) {
            //Handling errors:
            var errorCode = error.code;
            var errorMessage = error.Message;

            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            }
            console.log(error);
        });
    }

    render() {
        return (
            <View style={styles.registrationForm}>
                <Text style={styles.header}>Registration Form</Text>

                <TextInput style={styles.textinput} placeholder="Your Name" onChangeText={(text) => this.updateValue(text, 'name')} value={this.state.name}></TextInput>
                <TextInput style={styles.textinput} placeholder="Your Email" onChangeText={(text) => this.updateValue(text, 'email')} value={this.state.email}></TextInput>
                <TextInput style={styles.textinput} secureTextEntry={true} placeholder="Your Passwsord" onChangeText={(text) => this.updateValue(text, 'password')} value={this.state.password}></TextInput>
                <TouchableOpacity style={styles.button} onPress={this.showToConsole}>
                    <Text style={styles.btntext}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

//CSS:
const styles = StyleSheet.create({
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

export { Registration };