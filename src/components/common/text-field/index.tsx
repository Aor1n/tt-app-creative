import React from 'react';
import {Text, TextInput, TextInputProps, View, StyleSheet} from 'react-native';

interface TextFieldProps extends TextInputProps {
  label: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  ...textFieldProps
}) => (
  <View>
    <Text style={styles.label}>{label}:</Text>
    <TextInput {...textFieldProps} style={styles.input} />
  </View>
);

const styles = StyleSheet.create({
  label: {
    marginTop: 40,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 15,
  },
  input: {
    backgroundColor: '#dddddd',
    borderRadius: 8,
    padding: 23,
    fontSize: 15,
  },
});
