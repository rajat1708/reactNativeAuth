import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = (props) => {
const { labelText, value, onChangeText, placeholder, secureTextEntry } = props;
const { containerStyle, labelStyle, inputStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{labelText}</Text>
      <TextInput
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 5,
    flex: 1
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  }
};

export { Input };
