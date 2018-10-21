// @flow
import React from 'react';
import MoneyUnitDisplay from './MoneyUnitDisplay';
import { hundredImg, moneyImageSizes } from '../../common';

const { dollarHeight, dollarWidth } = moneyImageSizes;

type P = { count: number };

export default ({ count }: P) => (
  <MoneyUnitDisplay
    count={count}
    label="$100"
    image={hundredImg}
    height={dollarHeight}
    width={dollarWidth}
  />
);
