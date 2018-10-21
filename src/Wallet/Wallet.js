/* @flow */
import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import MainContainer from '../MainContainer';
import MoneyUnitInput from './MoneyUnitInput';
import CurrentValue from './CurrentValue';
import {
  colors,
  MoneyUnitCounts,
  fontSizes,
  moneyImageSizes,
  pennyImg,
  nickelImg,
  dimeImg,
  quarterImg,
  halfDollarImg,
  oneImg,
  fiveImg,
  tenImg,
  twentyImg,
  fiftyImg,
  hundredImg,
} from '../common';

type P = {};

type S = MoneyUnitCounts;

const initialState = {
  pennies: 0,
  nickels: 0,
  dimes: 0,
  quarters: 0,
  halves: 0,
  ones: 0,
  fives: 0,
  tens: 0,
  twenties: 0,
  fifties: 0,
  hundreds: 0,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.themeColor5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

class Wallet extends Component<P, S> {
  state = initialState;

  onChangeValue = (val: number, key: string) => this.setState({ [key]: val });

  render() {
    const {
      pennies,
      nickels,
      dimes,
      quarters,
      halves,
      ones,
      fives,
      tens,
      twenties,
      fifties,
      hundreds,
    } = this.state;

    const { container, header } = styles;

    const {
      pennyWidth,
      nickelWidth,
      dimeWidth,
      quarterWidth,
      halfDollarWidth,
      dollarWidth,
      dollarHeight,
    } = moneyImageSizes;

    return (
      <MainContainer>
        <View style={container}>
          <View style={header}>
            <Text style={{ width: wp('15%') }} />
            <View style={{ flex: 1 }}>
              <CurrentValue unitCounts={this.state} />
            </View>
            <TouchableOpacity
              style={{ width: wp('15%'), alignItems: 'flex-end' }}
              onPress={() => this.setState(initialState)}
            >
              <Text style={{ fontSize: fontSizes.normalText, color: colors.themeColor2 }}>
                Clear All
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <MoneyUnitInput
              count={pennies}
              label="1¢"
              image={pennyImg}
              height={pennyWidth}
              width={pennyWidth}
              onChangeValue={val => this.onChangeValue(val, 'pennies')}
            />
            <MoneyUnitInput
              count={nickels}
              label="5¢"
              image={nickelImg}
              height={nickelWidth}
              width={nickelWidth}
              onChangeValue={val => this.onChangeValue(val, 'nickels')}
            />
            <MoneyUnitInput
              count={dimes}
              label="10¢"
              image={dimeImg}
              height={dimeWidth}
              width={dimeWidth}
              onChangeValue={val => this.onChangeValue(val, 'dimes')}
            />
            <MoneyUnitInput
              count={quarters}
              label="25¢"
              image={quarterImg}
              height={quarterWidth}
              width={quarterWidth}
              onChangeValue={val => this.onChangeValue(val, 'quarters')}
            />
            <MoneyUnitInput
              count={halves}
              label="50¢"
              image={halfDollarImg}
              height={halfDollarWidth}
              width={halfDollarWidth}
              onChangeValue={val => this.onChangeValue(val, 'halves')}
            />
            <MoneyUnitInput
              count={ones}
              label="$1"
              image={oneImg}
              height={dollarHeight}
              width={dollarWidth}
              onChangeValue={val => this.onChangeValue(val, 'ones')}
            />
            <MoneyUnitInput
              count={fives}
              label="$5"
              image={fiveImg}
              height={dollarHeight}
              width={dollarWidth}
              onChangeValue={val => this.onChangeValue(val, 'fives')}
            />
            <MoneyUnitInput
              count={tens}
              label="$10"
              image={tenImg}
              height={dollarHeight}
              width={dollarWidth}
              onChangeValue={val => this.onChangeValue(val, 'tens')}
            />
            <MoneyUnitInput
              count={twenties}
              label="$20"
              image={twentyImg}
              height={dollarHeight}
              width={dollarWidth}
              onChangeValue={val => this.onChangeValue(val, 'twenties')}
            />
            <MoneyUnitInput
              count={fifties}
              label="$50"
              image={fiftyImg}
              height={dollarHeight}
              width={dollarWidth}
              onChangeValue={val => this.onChangeValue(val, 'fifties')}
            />
            <MoneyUnitInput
              count={hundreds}
              label="$100"
              image={hundredImg}
              height={dollarHeight}
              width={dollarWidth}
              onChangeValue={val => this.onChangeValue(val, 'hundreds')}
            />
          </ScrollView>
        </View>
      </MainContainer>
    );
  }
}

export default Wallet;
