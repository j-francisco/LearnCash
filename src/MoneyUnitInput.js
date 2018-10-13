/* @flow */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import NumberInput from './NumberInput';
import CircleButtonText from './CircleButtonText';
import { colors } from './colors';

type P = {
  count: number,
  onChangeValue: (val: number) => void,
  label: string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.themeColor2,
  },
  labelContainer: {
    width: 50,
    justifyContent: 'center',
  },
  labelStyle: {
    textAlign: 'center',
    fontSize: 18,
    color: colors.themeColor2,
  },
  inputContainer: {
    justifyContent: 'center',
  },
  clearContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
});

// TODO try using Context API and make this functional component

class MoneyUnitInput extends Component<P> {
  onChangeValue = (val: number) => this.props.onChangeValue(val);

  add = (amountToAdd: number) => this.props.onChangeValue(this.props.count + amountToAdd);

  render() {
    const { count, label } = this.props;
    const { container, labelContainer, inputContainer, labelStyle, clearContainer } = styles;
    return (
      <View style={container}>
        <View style={labelContainer}>
          <Text style={labelStyle}>{label}</Text>
        </View>
        <View style={inputContainer}>
          <NumberInput value={count} onChangeValue={this.onChangeValue} />
        </View>
        <View style={{ marginLeft: 40 }}>
          <CircleButtonText
            backgroundColor={colors.themeColor5}
            onPress={() => this.add(5)}
            text="+5"
          />
        </View>

        <View style={clearContainer}>
          <TouchableOpacity onPress={() => this.onChangeValue(0)}>
            <Text>Clear</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default MoneyUnitInput;
