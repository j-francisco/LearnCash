/* @flow */
import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import MoneyUnitInput from './MoneyUnitInput';
import CurrentValue from './CurrentValue';
import { colors } from './colors';

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

    return (
      <View style={{ flex: 1, marginTop: 40 }}>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: colors.themeColor5,
            paddingTop: 10,
            paddingBottom: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
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
            onChangeValue={val => this.onChangeValue(val, 'pennies')}
          />
          <MoneyUnitInput
            count={nickels}
            label="5¢"
            onChangeValue={val => this.onChangeValue(val, 'nickels')}
          />
          <MoneyUnitInput
            count={dimes}
            label="10¢"
            onChangeValue={val => this.onChangeValue(val, 'dimes')}
          />
          <MoneyUnitInput
            count={quarters}
            label="25¢"
            onChangeValue={val => this.onChangeValue(val, 'quarters')}
          />
          <MoneyUnitInput
            count={halves}
            label="50¢"
            onChangeValue={val => this.onChangeValue(val, 'halves')}
          />
          <MoneyUnitInput
            count={ones}
            label="$1"
            onChangeValue={val => this.onChangeValue(val, 'ones')}
          />
          <MoneyUnitInput
            count={fives}
            label="$5"
            onChangeValue={val => this.onChangeValue(val, 'fives')}
          />
          <MoneyUnitInput
            count={tens}
            label="$10"
            onChangeValue={val => this.onChangeValue(val, 'tens')}
          />
          <MoneyUnitInput
            count={twenties}
            label="$20"
            onChangeValue={val => this.onChangeValue(val, 'twenties')}
          />
          <MoneyUnitInput
            count={fifties}
            label="$50"
            onChangeValue={val => this.onChangeValue(val, 'fifties')}
          />
          <MoneyUnitInput
            count={hundreds}
            label="$100"
            onChangeValue={val => this.onChangeValue(val, 'hundreds')}
          />
        </ScrollView>
      </View>
    );
  }
}

export default UnitsToAmount;
