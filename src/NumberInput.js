/**
 * @flow
 */

import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import CircleButtonIcon from './CircleButtonIcon';
import { colors } from './colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  numberInput: {
    fontSize: 18,
    height: 30,
    width: 50,
    textAlign: 'center',
    color: colors.themeColor2,
  },
});

type Props = {
  value: number,
  onChangeValue: (value: number) => void,
};

class NumberInput extends Component<Props> {
  onChange = (val: number) => {
    this.changeValue(val);
  };

  onAdd = () => {
    this.changeValue(this.props.value + 1);
  };

  onSubtract = () => {
    this.changeValue(this.props.value - 1);
  };

  changeValue(val: number) {
    this.props.onChangeValue(val);
  }

  render() {
    const { container, numberInput } = styles;
    const { value } = this.props;
    const valueInt = parseInt(value, 10);
    const subtractEnabled = valueInt > 0;
    const subtractColor = subtractEnabled ? colors.themeColor1 : colors.themeColor1Disabled;
    const addEnabled = true;
    const addColor = addEnabled ? colors.themeColor1 : colors.themeColor1Disabled;

    return (
      <View style={container}>
        <CircleButtonIcon
          name="remove"
          onPress={subtractEnabled ? this.onSubtract : null}
          backgroundColor={subtractColor}
          iconColor="white"
        />
        <TextInput
          value={value.toString()}
          onChangeText={this.onChange}
          autoCapitalize="none"
          autoCorrect={false}
          editable={false}
          keyboardType="number-pad"
          style={numberInput}
        />
        <CircleButtonIcon
          name="add"
          onPress={addEnabled ? this.onAdd : null}
          backgroundColor={addColor}
          iconColor="white"
        />
      </View>
    );
  }
}

export default NumberInput;
