import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './common';


class LoginForm extends Component {

state = { email: '', password: '' }

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
        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
