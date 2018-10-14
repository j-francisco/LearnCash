/**
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import UnitsToAmount from './UnitsToAmount';
import { colors } from './commonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor4Light,
  },
});

export default () => (
  <View style={styles.container}>
    <UnitsToAmount />
  </View>
);
