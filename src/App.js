// @flow
import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Wallet from './Wallet';
import Pay from './Pay';
import { colors, fontSizes } from './common';

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

        return <Icon name={iconName} size={Platform.isPad ? 30 : 20} color={tintColor} />;
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
