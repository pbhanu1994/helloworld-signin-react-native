import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Alert,
    TouchableOpacity
} from 'react-native';

import firebase from './Firebase';

export default class Registration extends Component {

    static navigationOptions = {
        title: 'Home',
    }

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoading: false
        };
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
        // Firebase.init();
    }

    //Sign UP an User:
    signUp = () => {
        this.setState({isLoading: true});

        if (this.state.email == "") {
            Alert.alert("OOPS!","Please input the Email field")
        }
        else if (this.state.password == "") {
            Alert.alert("OOPS!","Please input the Password field")
        }

        //Creating User with email and password:
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((result) => {
            Alert.alert("Successfully created the account");
            this.props.navigation.navigate('Welcome', {password: this.state.password})
        }).catch(function (error) {
            //Handling errors:
            var errorCode = error.code;
            var errorMessage = error.Message;

            if (errorCode || errorMessage) {
                console.log(error);
                Alert.alert("Failed to create an Account");
            }
        }).finally(() => {
            this.setState({isLoading: false});
        });
    }

    //Sign IN an User:
    signIn = () => {
        this.setState({isLoading: true});

        if (this.state.email == "") {
            Alert.alert("OOPS!","Please input the Email field")
        }
        else if (this.state.password == "") {
            Alert.alert("OOPS!","Please input the Password field")
        }

        //Creating User with email and password:
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((result) => {
            //Alert.alert("Successfully Signed In!");
            this.props.navigation.navigate('Welcome', {password: this.state.password})
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            if(errorCode || errorMessage){
                Alert.alert("Incorrect Email or Password")
            }
          });
    }

    render() {
        return (
            <View style={styles.registrationForm}>
                <Text style={styles.header}>Register User</Text>
                <TextInput style={styles.textinput}  textContentType="emailAddress" keyboardType="email-address" placeholder="Your Email" placeholderTextColor="#fff" onChangeText={email => this.setState({ email })} defaultValue={this.state.email}></TextInput>
                <TextInput style={styles.textinput} textContentType="password" secureTextEntry={true} placeholder="Your Passwsord" placeholderTextColor="#fff" onChangeText={password => this.setState({ password })} defaultValue={this.state.password}></TextInput>
                <TouchableOpacity style={styles.button} onPress={this.signUp.bind(this)}>
                    <Text style={styles.btntext}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={styles.divideText}> OR 
                    
                </Text>
                <Text style={{color: 'cyan',textAlign:'center', paddingTop:5, fontWeight:'bold'}}
                    onPress={this.signIn.bind(this)}>
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