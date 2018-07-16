import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = (props) => {

const { labelText, value, onChangeText } = props

  return (
    <View>
      <Text>{labelText}</Text>
      <TextInput
        style={{ width: 100, height: 20 }}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export { Input };
