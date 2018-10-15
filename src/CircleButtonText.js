import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import CircleButton from './CircleButton';

type Props = {
  text: string,
  backgroundColor: string,
  onPress: () => void,
};

const styles = StyleSheet.create({
  labelStyle: {
    color: 'white',
    fontSize: widthPercentageToDP('3%'),
  },
});

function CircleButtonText(props: Props) {
  return (
    <CircleButton backgroundColor={props.backgroundColor} onPress={props.onPress}>
      <Text style={styles.labelStyle}>{props.text}</Text>
    </CircleButton>
  );
}

export default CircleButtonText;
