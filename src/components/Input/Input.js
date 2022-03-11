import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../../assets/color';

export default function Input({secure, title, style}) {
  return (
    <View style={style}>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={secure}
        autoCapitalize="none"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontSize: 20,
  },
  input: {
    height: 35,
    borderWidth: 1,
    width: '75%',
    borderRadius: 10,
    borderColor: colors.grey,
    marginTop: 3,
  },
});
