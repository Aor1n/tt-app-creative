import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import {colors} from 'src/styles/colors';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  onPress: () => void | Promise<void>;
}

export const Button: React.FC<ButtonProps> = ({text, onPress}) => (
  <TouchableOpacity style={styles.signInWrapper} onPress={onPress}>
    <Text style={styles.signInText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  signInWrapper: {
    display: 'flex',
    justifyContent: 'center',
    height: 54,
    backgroundColor: colors.primary,
    borderRadius: 30,
    marginTop: 50,
  },
  signInText: {
    textAlign: 'center',
    color: colors.white,
  },
});
