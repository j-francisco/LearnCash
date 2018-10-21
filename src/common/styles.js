// @flow
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const fontSizes = {
  normalText: wp('3.5%'),
  largeText: wp('5%'),
};

export const colors = {
  themeColor1: 'rgb(89, 117, 51)',
  themeColor1Disabled: 'rgba(89, 117, 51, 0.30)',
  themeColor2: 'rgb(51, 47, 40)',
  themeColor2Light: 'rgba(51, 47, 40, 0.50)',
  themeColor2Lighter: 'rgba(51, 47, 40, 0.30)',
  themeColor3: 'rgb(97, 181, 148)',
  themeColor4: 'rgb(229, 222, 165)',
  themeColor4Light: 'rgba(229, 222, 165, 0.50)',
  themeColor5: 'rgb(196, 78, 24)',
  mainBackground: 'white',
};

const coinWidth = wp('8%');

const coinSizeRatios = {
  penny: 0.75,
  nickel: 0.835,
  dime: 0.705,
  quarter: 0.955,
  halfDollar: 1.205,
};

export const moneyImageSizes = {
  pennyWidth: coinWidth * coinSizeRatios.penny,
  nickelWidth: coinWidth * coinSizeRatios.nickel,
  dimeWidth: coinWidth * coinSizeRatios.dime,
  quarterWidth: coinWidth * coinSizeRatios.quarter,
  halfDollarWidth: coinWidth * coinSizeRatios.halfDollar,
  dollarWidth: wp('18.67%'),
  dollarHeight: wp('8%'),
};
