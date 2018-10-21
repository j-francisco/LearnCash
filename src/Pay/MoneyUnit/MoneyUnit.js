// @flow
import { Component } from 'react';
import PennyDisplay from './PennyDisplay';
import NickelDisplay from './NickelDisplay';
import DimeDisplay from './DimeDisplay';
import QuarterDisplay from './QuarterDisplay';
import HalfDollarDisplay from './HalfDollarDisplay';
import OneDollarDisplay from './OneDollarDisplay';
import FiveDollarDisplay from './FiveDollarDisplay';
import TenDollarDisplay from './TenDollarDisplay';
import TwentyDollarDisplay from './TwentyDollarDisplay';
import FiftyDollarDisplay from './FiftyDollarDisplay';
import HundredDollarDisplay from './HundredDollarDisplay';

export default class MoneyUnit extends Component<{}> {
  static Penny = PennyDisplay;

  static Nickel = NickelDisplay;

  static Dime = DimeDisplay;

  static Quarter = QuarterDisplay;

  static HalfDollar = HalfDollarDisplay;

  static OneDollar = OneDollarDisplay;

  static FiveDollar = FiveDollarDisplay;

  static TenDollar = TenDollarDisplay;

  static TwentyDollar = TwentyDollarDisplay;

  static FiftyDollar = FiftyDollarDisplay;

  static HundredDollar = HundredDollarDisplay;
}
