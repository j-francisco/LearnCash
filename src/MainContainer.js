import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from './commonStyles';

type Props = {
  children: React.node,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackground,
  },
});

export default (props: Props) => <View style={styles.container}>{props.children}</View>;
