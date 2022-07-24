import React from 'react';
import {View, StyleSheet, ViewProps} from 'react-native';

import {colors} from 'src/styles/colors';

interface MainLayoutProps extends ViewProps {
  children: React.ReactNode;
}
export const MainLayout: React.FC<MainLayoutProps> = ({children}) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
    paddingVertical: 26,
    paddingHorizontal: 30,
  },
});
