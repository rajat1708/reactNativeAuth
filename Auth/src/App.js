import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDFsd6NfoT7OrNbLTT1Oy8QTDKa3mLyIqM',
      authDomain: 'reactauth-1ed44.firebaseapp.com',
      databaseURL: 'https://reactauth-1ed44.firebaseio.com',
      projectId: 'reactauth-1ed44',
      storageBucket: '',
      messagingSenderId: '721212971254'
    };
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}
export default App;
