// @flow
import React from 'react';
import MoneyUnitDisplay from './MoneyUnitDisplay';
import { pennyImg, moneyImageSizes } from '../../common';

const { pennyWidth } = moneyImageSizes;

type P = { count: number };

export default ({ count }: P) => (
  <MoneyUnitDisplay
    count={count}
    label="1¢"
    image={pennyImg}
    height={pennyWidth}
    width={pennyWidth}
  />
);
