/* @flow */
import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import MoneyUnitInput from './MoneyUnitInput';
import CurrentValue from './CurrentValue';
import { colors } from './commonStyles';
import * as moneyImages from './images/moneyImages';

const pennyInches = 0.75;
const nickelInches = 0.835;
const dimeInches = 0.705;
const quarterInches = 0.955;
const halfDollarInches = 1.205;

const coinWidth = 30;
const dollarWidth = 70;
const dollarHeight = 30;

type P = {};

type S = {
  pennies: number,
  nickels: number,
  dimes: number,
  quarters: number,
  halves: number,
  ones: number,
  fives: number,
  tens: number,
  twenties: number,
  fifties: number,
  hundreds: number,
};

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
    marginTop: 10,
  },
  header: {
    borderBottomWidth: 2,
    borderBottomColor: colors.themeColor5,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

class UnitsToAmount extends Component<P, S> {
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

    return (
      <View style={container}>
        <View style={header}>
          <Text style={{ width: 64 }} />
          <View style={{ flex: 1 }}>
            <CurrentValue unitCounts={this.state} />
          </View>
          <TouchableOpacity style={{ width: 64 }} onPress={() => this.setState(initialState)}>
            <Text style={{ width: 64 }}>Clear All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <MoneyUnitInput
            count={pennies}
            label="1¢"
            image={moneyImages.penny}
            height={coinWidth * pennyInches}
            width={coinWidth * pennyInches}
            onChangeValue={val => this.onChangeValue(val, 'pennies')}
          />
          <MoneyUnitInput
            count={nickels}
            label="5¢"
            image={moneyImages.nickel}
            height={coinWidth * nickelInches}
            width={coinWidth * nickelInches}
            onChangeValue={val => this.onChangeValue(val, 'nickels')}
          />
          <MoneyUnitInput
            count={dimes}
            label="10¢"
            image={moneyImages.dime}
            height={coinWidth * dimeInches}
            width={coinWidth * dimeInches}
            onChangeValue={val => this.onChangeValue(val, 'dimes')}
          />
          <MoneyUnitInput
            count={quarters}
            label="25¢"
            image={moneyImages.quarter}
            height={coinWidth * quarterInches}
            width={coinWidth * quarterInches}
            onChangeValue={val => this.onChangeValue(val, 'quarters')}
          />
          <MoneyUnitInput
            count={halves}
            label="50¢"
            image={moneyImages.halfdollar}
            height={coinWidth * halfDollarInches}
            width={coinWidth * halfDollarInches}
            onChangeValue={val => this.onChangeValue(val, 'halves')}
          />
          <MoneyUnitInput
            count={ones}
            label="$1"
            image={moneyImages.one}
            height={dollarHeight}
            width={dollarWidth}
            onChangeValue={val => this.onChangeValue(val, 'ones')}
          />
          <MoneyUnitInput
            count={fives}
            label="$5"
            image={moneyImages.five}
            height={dollarHeight}
            width={dollarWidth}
            onChangeValue={val => this.onChangeValue(val, 'fives')}
          />
          <MoneyUnitInput
            count={tens}
            label="$10"
            image={moneyImages.ten}
            height={dollarHeight}
            width={dollarWidth}
            onChangeValue={val => this.onChangeValue(val, 'tens')}
          />
          <MoneyUnitInput
            count={twenties}
            label="$20"
            image={moneyImages.twenty}
            height={dollarHeight}
            width={dollarWidth}
            onChangeValue={val => this.onChangeValue(val, 'twenties')}
          />
          <MoneyUnitInput
            count={fifties}
            label="$50"
            image={moneyImages.fifty}
            height={dollarHeight}
            width={dollarWidth}
            onChangeValue={val => this.onChangeValue(val, 'fifties')}
          />
          <MoneyUnitInput
            count={hundreds}
            label="$100"
            image={moneyImages.hundred}
            height={dollarHeight}
            width={dollarWidth}
            onChangeValue={val => this.onChangeValue(val, 'hundreds')}
          />
        </ScrollView>
      </View>
    );
  }
}

export default UnitsToAmount;
