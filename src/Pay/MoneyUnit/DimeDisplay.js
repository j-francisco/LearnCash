// @flow
import React from 'react';
import MoneyUnitDisplay from './MoneyUnitDisplay';
import { dimeImg, moneyImageSizes } from '../../common';

const { dimeWidth } = moneyImageSizes;

type P = { count: number };

export default ({ count }: P) => (
  <MoneyUnitDisplay
    count={count}
    label="10¢"
    image={dimeImg}
    height={dimeWidth}
    width={dimeWidth}
  />
);
