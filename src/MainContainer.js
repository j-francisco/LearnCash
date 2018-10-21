// @flow
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { colors } from './common';

type Props = {
  children: React.Node,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: heightPercentageToDP('4%'),
    backgroundColor: colors.mainBackground,
  },
});

export default (props: Props) => <View style={styles.container}>{props.children}</View>;
