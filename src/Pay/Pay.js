// @flow
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import MoneyUnit from './MoneyUnit';
import MainContainer from '../MainContainer';
import {
  fontSizes,
  CurrencyInput,
  colors,
  MoneyUnitCounts,
  CalculateRequiredUnits,
} from '../common';

const styles = StyleSheet.create({
  headerText: {
    fontSize: fontSizes.largeText,
    color: colors.themeColor2,
    alignSelf: 'center',
    padding: 10,
  },
  currencyInputContainerStyle: { alignSelf: 'center', width: widthPercentageToDP('40%') },
  currencyInputStyle: {
    textAlign: 'center',
    fontSize: fontSizes.largeText,
    marginVertical: 10,
  },
});

type P = {
  enableHalfDollars: boolean,
};

type S = {
  price: string,
};

class Pay extends Component<P, S> {
  state = {
    price: '',
  };

  onPriceChanged = (price: string) => {
    this.setState({ price });
  };

  render() {
    const { headerText, currencyInputContainerStyle, currencyInputStyle } = styles;
    const { enableHalfDollars } = this.props;

    const unitCounts: MoneyUnitCounts = CalculateRequiredUnits(this.state.price, enableHalfDollars);

    return (
      <MainContainer>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView style={{ flex: 1 }}>
            <Text style={headerText}>Enter Price:</Text>
            <View style={currencyInputContainerStyle}>
              <CurrencyInput
                style={currencyInputStyle}
                value={this.state.price}
                onChanged={this.onPriceChanged}
              />
            </View>
            <View
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: colors.themeColor5,
              }}
            >
              <Text style={headerText}>You need:</Text>
            </View>
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
        </TouchableWithoutFeedback>
      </MainContainer>
    );
  }
}

export default Pay;
