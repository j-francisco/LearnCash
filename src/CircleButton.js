/* @flow */
import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

type Props = {
  children: React.Node,
  backgroundColor: string,
  onPress: () => void,
};

// These styles match the Icon from react-native-elements
const styles = StyleSheet.create({
  container: {
    width: wp('7%'),
    height: wp('7%'),
    margin: 7,
    borderRadius: wp('3.5%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelStyle: {
    color: 'white',
  },
});

function CircleButton(props: Props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.container, { backgroundColor: props.backgroundColor }]}>
        {props.children}
      </View>
    </TouchableOpacity>
  );
}

export default CircleButton;
