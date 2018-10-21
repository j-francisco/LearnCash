// @flow
import React from 'react';
import MoneyUnitDisplay from './MoneyUnitDisplay';
import { nickelImg, moneyImageSizes } from '../../common';

const { nickelWidth } = moneyImageSizes;

type P = { count: number };

export default ({ count }: P) => (
  <MoneyUnitDisplay
    count={count}
    label="5¢"
    image={nickelImg}
    height={nickelWidth}
    width={nickelWidth}
  />
);
