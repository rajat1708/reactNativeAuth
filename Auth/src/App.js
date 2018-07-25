import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

state = { loggedIn: null }

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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }


renderContent() {
switch (this.state.loggedIn) {
  case true:
    return (
      <CardSection>
      <Button onPress={() => firebase.auth().signOut()}>
        Log out
      </Button>
      </CardSection>

    );
  case false:
    return <LoginForm />;
  default:
    return (
      <View >
      <Spinner size='small' />
      </View>
    );
  }
}

  render() {
    return (
      <View >
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
