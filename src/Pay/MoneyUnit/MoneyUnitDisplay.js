// @flow
import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors, fontSizes, moneyImageSizes } from '../../common';

type P = {
  count: number,
  label: string,
  image: React.Node,
  width: number,
  height: number,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  countTextStyle: {
    fontSize: fontSizes.largeText,
  },
});

const MoneyUnitDisplay = (props: P) => {
  const { count, label, image, height, width } = props;
  const { container, labelContainer, labelStyle, countTextStyle } = styles;
  return (
    <View style={container}>
      <View style={labelContainer}>
        <Image style={{ width, height }} source={image} />
        <Text style={labelStyle}>{label}</Text>
      </View>
      <View>
        <Text style={countTextStyle}>{count}</Text>
      </View>
    </View>
  );
};

export default MoneyUnitDisplay;
