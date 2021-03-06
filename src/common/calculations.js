// @flow
import type { MoneyUnitCounts } from './types';

export const ZeroValue: MoneyUnitCounts = {
  pennies: 0,
  nickels: 0,
  dimes: 0,
  quarters: 0,
  halves: 0,
  ones: 0,
  fives: 0,
  tens: 0,
  twenties: 0,
  fifties: 0,
  hundreds: 0,
};

export function convertPriceToCents(displayPrice: string): number {
  // displayPrice comes in like "$xx.xx"
  if (displayPrice.length === 0) {
    return 0;
  }

  let price = displayPrice;
  if (price.includes('$')) {
    price = price.substring(1);
  }

  // Parsing this way means we're always using whole numbers and
  // don't have to deal with floating point problems.
  let dollars = 0;
  let cents = 0;
  if (price.includes('.')) {
    const split = price.split('.');
    dollars = parseInt(split[0], 10);
    cents = parseInt(split[1], 10);
  } else {
    dollars = parseInt(price, 10);
  }

  if (Number.isNaN(dollars)) {
    dollars = 0;
  }

  if (Number.isNaN(cents)) {
    cents = 0;
  }

  return dollars * 100 + cents;
}

export function calculateRequiredUnits(
  displayPrice: string,
  enableHalfDollar: boolean = false
): MoneyUnitCounts {
  let remainingCents = convertPriceToCents(displayPrice);

  let requiredUnits = {
    pennies: 0,
    nickels: 0,
    dimes: 0,
    quarters: 0,
    halves: 0,
    ones: 0,
    fives: 0,
    tens: 0,
    twenties: 0,
    fifties: 0,
    hundreds: 0,
  };

  if (remainingCents >= 10000) {
    const hundreds = Math.floor(remainingCents / 10000);
    remainingCents %= 10000;
    requiredUnits = { ...requiredUnits, hundreds };
  }

  if (remainingCents >= 5000) {
    const fifties = Math.floor(remainingCents / 5000);
    remainingCents %= 5000;
    requiredUnits = { ...requiredUnits, fifties };
  }

  if (remainingCents >= 2000) {
    const twenties = Math.floor(remainingCents / 2000);
    remainingCents %= 2000;
    requiredUnits = { ...requiredUnits, twenties };
  }

  if (remainingCents >= 1000) {
    const tens = Math.floor(remainingCents / 1000);
    remainingCents %= 1000;
    requiredUnits = { ...requiredUnits, tens };
  }

  if (remainingCents >= 500) {
    const fives = Math.floor(remainingCents / 500);
    remainingCents %= 500;
    requiredUnits = { ...requiredUnits, fives };
  }

  if (remainingCents >= 100) {
    const ones = Math.floor(remainingCents / 100);
    remainingCents %= 100;
    requiredUnits = { ...requiredUnits, ones };
  }

  if (enableHalfDollar && remainingCents >= 50) {
    const halves = Math.floor(remainingCents / 50);
    remainingCents %= 50;
    requiredUnits = { ...requiredUnits, halves };
  }

  if (remainingCents >= 25) {
    const quarters = Math.floor(remainingCents / 25);
    remainingCents %= 25;
    requiredUnits = { ...requiredUnits, quarters };
  }

  if (remainingCents >= 10) {
    const dimes = Math.floor(remainingCents / 10);
    remainingCents %= 10;
    requiredUnits = { ...requiredUnits, dimes };
  }

  if (remainingCents >= 5) {
    const nickels = Math.floor(remainingCents / 5);
    remainingCents %= 5;
    requiredUnits = { ...requiredUnits, nickels };
  }

  if (remainingCents >= 1) {
    const pennies = Math.floor(remainingCents / 1);
    remainingCents %= 1;
    requiredUnits = { ...requiredUnits, pennies };
  }

  return requiredUnits;
}

export function getCentsFromUnitCounts(unitCounts: MoneyUnitCounts): number {
  const {
    pennies,
    nickels,
    dimes,
    quarters,
    halves,
    ones,
    fives,
    tens,
    twenties,
    fifties,
    hundreds,
  } = unitCounts;

  const totalCents =
    pennies +
    nickels * 5 +
    dimes * 10 +
    quarters * 25 +
    halves * 50 +
    ones * 100 +
    fives * 500 +
    tens * 1000 +
    twenties * 2000 +
    fifties * 5000 +
    hundreds * 10000;

  return totalCents;
}

export function getValueFromUnitCounts(unitCounts: MoneyUnitCounts): string {
  const totalCents = getCentsFromUnitCounts(unitCounts);
  const dollars = totalCents / 100;

  // Doesn't seem to work on older ios versions
  // return dollars.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  return `$${dollars.toFixed(2)}`;
}
