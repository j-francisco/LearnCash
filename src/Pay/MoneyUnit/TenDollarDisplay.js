// @flow
import React from 'react';
import MoneyUnitDisplay from './MoneyUnitDisplay';
import { tenImg, moneyImageSizes } from '../../common';

const { dollarHeight, dollarWidth } = moneyImageSizes;

type P = { count: number };

export default ({ count }: P) => (
  <MoneyUnitDisplay
    count={count}
    label="$10"
    image={tenImg}
    height={dollarHeight}
    width={dollarWidth}
  />
);
