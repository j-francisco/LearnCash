// @flow
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import MoneyUnit from './MoneyUnit';
import MainContainer from '../MainContainer';
import {
  fontSizes,
  CurrencyInput,
  colors,
  MoneyUnitCounts,
  CalculateRequiredUnits,
  logoImg,
} from '../common';

const styles = StyleSheet.create({
  enterPriceContainerStyle: { flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 20 },
  headerText: {
    fontSize: fontSizes.largeText,
    color: colors.themeColor2,
  },
  currencyInputContainerStyle: { width: wp('40%') },
  currencyInputStyle: {
    fontSize: fontSizes.largeText,
    marginLeft: 10,
    color: colors.themeColor1,
  },
});

type P = {
  enableHalfDollars: boolean,
};

type S = {
  price: string,
};

const isZero = (unitCounts: MoneyUnitCounts) =>
  Object.values(unitCounts)
    .map(val => parseInt(val, 10))
    .reduce((total: number, val: number) => total + val) === 0;

const EmptyContent = () => (
  <View style={{ flex: 1, alignItems: 'center', marginTop: wp('10%') }}>
    <Image
      source={logoImg}
      style={{ width: wp('20%'), height: wp('20%'), borderRadius: wp('10%') }}
    />
    <Text style={{ fontSize: fontSizes.normalText, color: colors.themeColor2Light, marginTop: 50 }}>
      Enter a price to see how many bills and coins you need.
    </Text>
  </View>
);

class Pay extends Component<P, S> {
  state = {
    price: '',
  };

  onPriceChanged = (price: string) => {
    this.setState({ price });
  };

  render() {
    const {
      enterPriceContainerStyle,
      headerText,
      currencyInputContainerStyle,
      currencyInputStyle,
    } = styles;
    const { enableHalfDollars } = this.props;

    const unitCounts: MoneyUnitCounts = CalculateRequiredUnits(this.state.price, enableHalfDollars);

    const header = (
      <View style={enterPriceContainerStyle}>
        <Text style={headerText}>Enter Price:</Text>
        <View style={currencyInputContainerStyle}>
          <CurrencyInput
            style={currencyInputStyle}
            value={this.state.price}
            onChanged={this.onPriceChanged}
          />
        </View>
      </View>
    );

    return (
      <MainContainer>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {isZero(unitCounts) ? (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              {header}
              <EmptyContent />
            </ScrollView>
          ) : (
            <ScrollView style={{ flex: 1 }}>
              {header}
              <View style={{ flex: 1 }}>
                {unitCounts.pennies > 0 && <MoneyUnit.Penny count={unitCounts.pennies} />}
                {unitCounts.nickels > 0 && <MoneyUnit.Nickel count={unitCounts.nickels} />}
                {unitCounts.dimes > 0 && <MoneyUnit.Dime count={unitCounts.dimes} />}
                {unitCounts.quarters > 0 && <MoneyUnit.Quarter count={unitCounts.quarters} />}
                {unitCounts.halves > 0 &&
                  enableHalfDollars && <MoneyUnit.HalfDollar count={unitCounts.halves} />}
                {unitCounts.ones > 0 && <MoneyUnit.OneDollar count={unitCounts.ones} />}
                {unitCounts.fives > 0 && <MoneyUnit.FiveDollar count={unitCounts.fives} />}
                {unitCounts.tens > 0 && <MoneyUnit.TenDollar count={unitCounts.tens} />}
                {unitCounts.twenties > 0 && <MoneyUnit.TwentyDollar count={unitCounts.twenties} />}
                {unitCounts.fifties > 0 && <MoneyUnit.FiftyDollar count={unitCounts.fifties} />}
                {unitCounts.hundreds > 0 && <MoneyUnit.HundredDollar count={unitCounts.hundreds} />}
              </View>
            </ScrollView>
          )}
        </TouchableWithoutFeedback>
      </MainContainer>
    );
  }
}

export default Pay;
