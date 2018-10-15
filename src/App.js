import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Wallet from './Wallet';
import Pay from './Pay';
import { colors } from './commonStyles';

export default createBottomTabNavigator(
  {
    Wallet,
    Pay,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: (iconOptions: { horizontal: boolean, tintColor: string }) => {
        const { horizontal, tintColor } = iconOptions;
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Wallet') {
          iconName = 'md-wallet';
        } else if (routeName === 'Pay') {
          iconName = 'md-cash';
        }

        return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: colors.themeColor5,
      inactiveTintColor: colors.themeColor2Light,
      activeBackgroundColor: colors.mainBackground,
      inactiveBackgroundColor: colors.mainBackground,
      style: { borderTopColor: colors.themeColor5 },
    },
  }
);
