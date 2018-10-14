/* @flow */
import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  children: React.Node,
  backgroundColor: string,
  onPress: () => void,
};

// These styles match the Icon from react-native-elements
const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    margin: 7,
    borderRadius: 15,
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
