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
    width: 40,
    height: 40,
    margin: 7,
    borderRadius: 20,
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
