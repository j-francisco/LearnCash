// @flow
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Wallet from './Wallet';
import Pay from './Pay';
import { colors } from './common';

const styles = StyleSheet.create({
  iconStyle: Platform.isPad ? { marginTop: 3 } : {},
});

export default createBottomTabNavigator(
  {
    Wallet,
    Pay,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: (iconOptions: { tintColor: string }) => {
        const { tintColor } = iconOptions;
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Wallet') {
          iconName = 'md-wallet';
        } else if (routeName === 'Pay') {
          iconName = 'md-cash';
        }

        return <Icon name={iconName} size={25} color={tintColor} style={styles.iconStyle} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: colors.themeColor5,
      inactiveTintColor: colors.themeColor2Light,
      activeBackgroundColor: colors.mainBackground,
      inactiveBackgroundColor: colors.mainBackground,
      style: { borderTopColor: colors.themeColor5 },
      labelStyle: { fontSize: wp('3%') },
    },
  }
);
