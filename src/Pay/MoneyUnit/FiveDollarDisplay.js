// @flow
import React from 'react';
import MoneyUnitDisplay from './MoneyUnitDisplay';
import { fiveImg, moneyImageSizes } from '../../common';

const { dollarHeight, dollarWidth } = moneyImageSizes;

type P = { count: number };

export default ({ count }: P) => (
  <MoneyUnitDisplay
    count={count}
    label="$5"
    image={fiveImg}
    height={dollarHeight}
    width={dollarWidth}
  />
);
