import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {colors} from 'src/styles/colors';

export const MovieFeature = ({
  featureTitle,
  featureValue,
}: {
  featureTitle: string;
  featureValue: string | number;
}) => (
  <View style={styles.movieFeatureWrapper}>
    <Text style={styles.movieFeatureTitle}>{featureTitle}</Text>
    <Text style={styles.movieFeatureValue}>{featureValue}</Text>
  </View>
);

const styles = StyleSheet.create({
  movieFeatureWrapper: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  movieFeatureTitle: {
    width: 80,
    fontSize: 15,
    color: colors.label,
    fontWeight: '600',
  },
  movieFeatureValue: {
    fontSize: 15,
    fontWeight: '600',
  },
});
