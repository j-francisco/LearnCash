/* @flow */
import React from 'react';
import { Text } from 'react-native';
import { colors, fontSizes, getValueFromUnitCounts, MoneyUnitCounts } from '../common';

type Props = {
  unitCounts: MoneyUnitCounts,
};

function CurrentValue(props: Props) {
  const value = getValueFromUnitCounts(props.unitCounts);
  return (
    <Text style={{ textAlign: 'center', fontSize: fontSizes.largeText, color: colors.themeColor2 }}>
      {value}
    </Text>
  );
}

export default CurrentValue;
