import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {MovieComment} from 'src/services/types';
import {colors} from 'src/styles/colors';

export const MovieCommentMessage = ({
  message,
}: {
  message: MovieComment['message'];
}) => (
  <View style={styles.messageContainer}>
    <Text style={styles.message}>{message}</Text>
  </View>
);

const styles = StyleSheet.create({
  messageContainer: {
    backgroundColor: colors.grey,
    borderRadius: 12,
    marginBottom: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  message: {
    fontWeight: 'bold',
  },
});
