import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './common';


class LoginForm extends Component {

state = { email: '', password: '', errorMessage: '', loading: false }

onButtonPress() {
  const { email, password } = this.state;

  this.setState({ errorMessage: '', loading: true });

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(this.onLoginSuccess.bind(this))
  .catch(() => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
    .catch(this.onLoginFailed.bind(this));
  });
}

onLoginFailed() {
  this.setState({
    loading: false,
    errorMessage: 'Authentication failed'
  });
}

onLoginSuccess() {
  this.setState({
    email: '',
    password: '',
    loading: false,
    errorMessage: ''
  });
}

renderButtonOrSpinner() {
  if (this.state.loading) {
    return <Spinner size='large' />;
  }
  return (
  <Button onPress={this.onButtonPress.bind(this)}>
    Log In
  </Button>
  );
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
            placeholder='Password'
            labelText='Password'
            secureTextEntry
          />
        </CardSection>
        <Text style={styles.errorMessageStyle}>{this.state.errorMessage}</Text>
        <CardSection>
          {this.renderButtonOrSpinner()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorMessageStyle: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 20
  }
};

export default LoginForm;
