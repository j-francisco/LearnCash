// @flow
import React from 'react';
import MoneyUnitDisplay from './MoneyUnitDisplay';
import { halfDollarImg, moneyImageSizes } from '../../common';

const { halfDollarWidth } = moneyImageSizes;

type P = { count: number };

export default ({ count }: P) => (
  <MoneyUnitDisplay
    count={count}
    label="50¢"
    image={halfDollarImg}
    height={halfDollarWidth}
    width={halfDollarWidth}
  />
);
