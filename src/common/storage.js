// @flow
import { AsyncStorage } from 'react-native';
import { ZeroValue } from './calculations';
import type { MoneyUnitCounts } from './types';

const WALLET_VALUE_KEY = 'LEARNCASH_WALLET_VALUE';

async function storeWalletValue(value: MoneyUnitCounts) {
  try {
    await AsyncStorage.setItem(WALLET_VALUE_KEY, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`AsyncStorage error: ${error.message}`); // eslint-disable-line
    return false;
  }
}

async function retrieveWalletValue(): Promise<MoneyUnitCounts> {
  try {
    return await AsyncStorage.getItem(WALLET_VALUE_KEY);
  } catch (error) {
    console.error(`AsyncStorage error: ${error.message}`); // eslint-disable-line
    return ZeroValue;
  }
}

export { storeWalletValue, retrieveWalletValue };
