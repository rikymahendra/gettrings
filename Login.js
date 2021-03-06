/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TextInput,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
var{width,height}=Dimensions.get('window');
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import * as firebase from "firebase";
var config = {
    apiKey: "AIzaSyAz5U5rqAr-SDcjWv0xQeexFEQeuS5yTVQ",
    authDomain: "gettrings.firebaseapp.com",
    databaseURL: "https://gettrings.firebaseio.com",
    projectId: "gettrings",
    storageBucket: "",
    messagingSenderId: "1005207137910"
  };

const firebaseapp = firebase.initializeApp(config);
export default class Login extends Component {
  static navigationOptions = {
      header : null
  };

  constructor(props){
    super(props);
    this.state = {
      email:"",
      pass:""
    }
  }

  login = ()=>{
    firebaseapp.auth().signInWithEmailAndPassword(this.state.email,this.state.pass).then(()=>{
      const { navigate } = this.props.navigation;
      navigate("Home");
    }).catch((Error)=>{
        alert(Error);
    });
  }
  render() {
      const { navigate } = this.props.navigation;
    return (
       <Image
          source={require('./login.png')}
          style={{height:height,width:width}}
        >
        <Text style={{color:'white',textAlign:'center',marginTop:250,fontSize:45}}>
          
        </Text>
        <TextInput
          style={{height: 40, width: 300, borderColor: 'grey', borderWidth: 1, alignSelf: 'center', color: 'white', fontSize: 15, borderRadius: 10, marginTop:10}}
          placeholder='Username'
          placeholderTextColor='grey'
          underlineColorAndroid='transparent'
          onChangeText = {
            (asd)=>this.setState({email:asd})
          }
        />
        <TextInput
          style={{height: 40, width: 300, borderColor: 'grey', borderWidth: 1, alignSelf: 'center', color: 'white', fontSize: 15, borderRadius: 10, marginTop:10}}
          placeholder='Password'
          placeholderTextColor='grey'
          underlineColorAndroid='transparent'
          secureTextEntry={true}
          onChangeText = {
            (asd)=>this.setState({pass:asd})
          }
        />
        <Button rounded light onPress={()=>this.login()}
        style={{alignSelf:'center', marginTop:10, height: 40, width: 300}}>
            <Text
            style={{marginLeft:'35%'}}>Login</Text>
          </Button>
        <View
        style={{flexDirection:'row'}}>
        <Text
        style={{marginLeft:'26.5%', color: 'white', marginTop:100}}>Not Registerred?</Text>
        <TouchableOpacity onPress={()=>navigate('Signup')}>
        <Text
        style={{marginLeft:10, color: 'blue', marginTop:100}}>Sign Up</Text>
        </TouchableOpacity>
        </View>
        </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});
