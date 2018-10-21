// @flow
import React from 'react';
import { Icon } from 'react-native-elements';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { CircleButton } from './CircleButton';

type Props = {
  name: string,
  backgroundColor: string,
  iconColor: string,
  onPress: () => void,
};

export function CircleButtonIcon(props: Props) {
  return (
    <CircleButton backgroundColor={props.backgroundColor} onPress={props.onPress}>
      <Icon
        name={props.name}
        color={props.iconColor}
        size={widthPercentageToDP('3%')}
        underlayColor="transparent"
      />
    </CircleButton>
  );
}
