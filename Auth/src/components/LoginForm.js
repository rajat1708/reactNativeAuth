import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input } from './common';


class LoginForm extends Component {

state = { email: '', password: '', errorMessage: '' }

onButtonPress() {
  const { email, password } = this.state;

  this.setState({ errorMessage: '' });

  firebase.auth().signInWithEmailAndPassword(email, password)
  .catch(() => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(() => {
      this.setState({ errorMessage: 'Authentication failed' });
    });
  });
}

  render() {
    return (
      <Card>
        <CardSection>
          <Input
          value={this.state.email}
          onChangeText={text => this.setState({ email: text })}
          placeholder='user@gmail.com'
          labelText='Email'
          />
        </CardSection>
        <CardSection>
          <Input
            value={this.state.password}
            onChangeText={text => this.setState({ password: text })}
            placeholder='password'
            labelText='Password'
            secureTextEntry
          />
        </CardSection>
        <Text>{this.state.errorMessage}</Text>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
