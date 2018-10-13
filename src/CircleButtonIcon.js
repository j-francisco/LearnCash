import React from 'react';
import { Icon } from 'react-native-elements';
import CircleButton from './CircleButton';

type Props = {
  name: string,
  backgroundColor: string,
  iconColor: string,
  onPress: () => void,
};

function CircleButtonText(props: Props) {
  return (
    <CircleButton backgroundColor={props.backgroundColor} onPress={props.onPress}>
      <Icon name={props.name} color={props.iconColor} size={18} underlayColor="transparent" />
    </CircleButton>
  );
}

export default CircleButtonText;
