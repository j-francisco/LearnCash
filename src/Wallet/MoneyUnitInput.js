/* @flow */

import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import NumberInput from './NumberInput';
import { CircleButtonText, fontSizes, colors, moneyImageSizes } from '../common';

type P = {
  count: number,
  onChangeValue: (val: number) => void,
  label: string,
  image: React.node,
  width: number,
  height: number,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.themeColor2Lighter,
  },
  labelContainer: {
    width: moneyImageSizes.dollarWidth,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  labelStyle: {
    textAlign: 'center',
    fontSize: fontSizes.normalText,
    color: colors.themeColor2,
  },
  rightSide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  inputContainer: {},
  clearContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

// TODO try using Context API and make this functional component

class MoneyUnitInput extends React.Component<P> {
  onChangeValue = (val: number) => this.props.onChangeValue(val);

  add = (amountToAdd: number) => this.props.onChangeValue(this.props.count + amountToAdd);

  render() {
    const { count, label, image, height, width } = this.props;
    const { container, labelContainer, inputContainer, labelStyle, clearContainer } = styles;
    return (
      <View style={container}>
        <View style={labelContainer}>
          <Image style={{ width, height }} source={image} />
          <Text style={labelStyle}>{label}</Text>
        </View>
        <View style={inputContainer}>
          <NumberInput value={count} onChangeValue={this.onChangeValue} />
        </View>
        <View style={{ marginLeft: wp('3%') }}>
          <CircleButtonText
            backgroundColor={colors.themeColor5}
            onPress={() => this.add(5)}
            text="+5"
          />
        </View>
        <View style={clearContainer}>
          <TouchableOpacity onPress={() => this.onChangeValue(0)}>
            <Text style={{ fontSize: fontSizes.normalText }}>Clear</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default MoneyUnitInput;
