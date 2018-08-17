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
            email: '',
            password: '',
        };
        this.signUp = this.signUp.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    // handleInput(text, field) {
    //     if (field == 'name' && field != "") {
    //         this.setState({
    //             name: text,
    //         })
    //     }
    //     else if (field == 'email' && field != "") {
    //         this.setState({
    //             email: text,
    //         })
    //     }
    //     else if (field == 'password' && field != "") {
    //         this.setState({
    //             password: text,
    //         })
    //     }
    // }

    componentWillMount() {
        //Configurating firebase with api Key, authDomain, DB Name, etc:
        Firebase.init();
    }

    showToConsole = () => {
        if (this.state.name == "") {
            Alert.alert("OOPS!","Please input the Name field")
        }
        else if (this.state.email == "") {
            Alert.alert("OOPS!","Please input the Email field")
        }
        else if (this.state.password == "") {
            Alert.alert("OOPS!","Please input the Password field")
        }
        //Passing the values to the regInfo object in Firebase.js:
        Firebase.regInfo.name = this.state.name,
        Firebase.regInfo.email = this.state.email,
        Firebase.regInfo.password = this.state.password
    }

    //Sign UP an User:
    signUp = () => {
        if (this.state.name == "") {
            Alert.alert("OOPS!","Please input the Name field")
        }
        else if (this.state.email == "") {
            Alert.alert("OOPS!","Please input the Email field")
        }
        else if (this.state.password == "") {
            Alert.alert("OOPS!","Please input the Password field")
        }

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

    //Sign IN an User:
    signIn = () => {
        if (this.state.email == "") {
            Alert.alert("OOPS!","Please input the Email field")
        }
        else if (this.state.password == "") {
            Alert.alert("OOPS!","Please input the Password field")
        }

        //Creating User with email and password:
        Firebase.auth.signInWithEmailAndPassword(this.state.email, this.state.password).catch(function (error) {
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
                <Text style={styles.header}>Register User</Text>
                <TextInput style={styles.textinput} placeholder="Your Email" placeholderTextColor="#fff" onChangeText={(text) => this.setState({email: text})} defaultValue={this.state.email}></TextInput>
                <TextInput style={styles.textinput} secureTextEntry={true} placeholder="Your Passwsord" placeholderTextColor="#fff" onChangeText={(text) => this.setState({password: text})} defaultValue={this.state.password}></TextInput>
                <TouchableOpacity style={styles.button} onPress={this.signUp}>
                    <Text style={styles.btntext}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={styles.divideText}> OR 
                    
                </Text>
                <Text style={{color: 'cyan',textAlign:'center', paddingTop:5, fontWeight:'bold'}}
                    onPress={this.signIn}>
                        Sign In
                </Text>
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
        borderBottomWidth: 1,
        textAlign:'center'
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 20,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
        alignItems:'center',

    },
    signInBtn:{
        color: 'cyan',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 5
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
        fontWeight: 'bold',
        
    },
    divideText:{
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 20
    }
});

export { Registration };