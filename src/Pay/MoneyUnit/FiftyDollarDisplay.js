// @flow
import React from 'react';
import MoneyUnitDisplay from './MoneyUnitDisplay';
import { fiftyImg, moneyImageSizes } from '../../common';

const { dollarHeight, dollarWidth } = moneyImageSizes;

type P = { count: number };

export default ({ count }: P) => (
  <MoneyUnitDisplay
    count={count}
    label="$50"
    image={fiftyImg}
    height={dollarHeight}
    width={dollarWidth}
  />
);
