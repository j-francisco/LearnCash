// @flow
import React from 'react';
import MoneyUnitDisplay from './MoneyUnitDisplay';
import { quarterImg, moneyImageSizes } from '../../common';

const { quarterWidth } = moneyImageSizes;

type P = { count: number };

export default ({ count }: P) => (
  <MoneyUnitDisplay
    count={count}
    label="25¢"
    image={quarterImg}
    height={quarterWidth}
    width={quarterWidth}
  />
);
