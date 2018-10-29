import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from '../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.themeColor1} />
    </View>
  );
}

export { Loading };
