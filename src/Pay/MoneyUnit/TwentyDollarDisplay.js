// @flow
import React from 'react';
import MoneyUnitDisplay from './MoneyUnitDisplay';
import { twentyImg, moneyImageSizes } from '../../common';

const { dollarHeight, dollarWidth } = moneyImageSizes;

type P = { count: number };

export default ({ count }: P) => (
  <MoneyUnitDisplay
    count={count}
    label="$20"
    image={twentyImg}
    height={dollarHeight}
    width={dollarWidth}
  />
);
