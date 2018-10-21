// @flow
import React from 'react';
import MoneyUnitDisplay from './MoneyUnitDisplay';
import { oneImg, moneyImageSizes } from '../../common';

const { dollarHeight, dollarWidth } = moneyImageSizes;

type P = { count: number };

export default ({ count }: P) => (
  <MoneyUnitDisplay
    count={count}
    label="$1"
    image={oneImg}
    height={dollarHeight}
    width={dollarWidth}
  />
);
