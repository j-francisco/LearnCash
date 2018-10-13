/* @flow */
import React from 'react';
import { Text } from 'react-native';
import { colors } from './colors';

type UnitCounts = {
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

function getValueFromUnitCounts(unitCounts: UnitCounts): string {
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
  } = unitCounts;

  const totalCents =
    pennies +
    nickels * 5 +
    dimes * 10 +
    quarters * 25 +
    halves * 50 +
    ones * 100 +
    fives * 500 +
    tens * 1000 +
    twenties * 2000 +
    fifties * 5000 +
    hundreds * 10000;

  const dollars = totalCents / 100;

  return dollars.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

type Props = {
  unitCounts: UnitCounts,
};

function CurrentValue(props: Props) {
  const value = getValueFromUnitCounts(props.unitCounts);
  return (
    <Text style={{ textAlign: 'center', fontSize: 22, color: colors.themeColor2 }}>{value}</Text>
  );
}

export default CurrentValue;
