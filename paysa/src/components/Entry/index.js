import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {IconButton} from 'react-native-paper';

import {Home} from '../Home';
import {Settings} from '../Settings';
import {TradingAccount} from '../TradingAccount';
import {Invest} from '../Invest';

const Tab = createBottomTabNavigator();

export function Entry({navigation}) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <IconButton
              style={{flex: 1, padding: 0, margin: 0}}
              icon="bank"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TradingAccount"
        component={TradingAccount}
        options={{
          tabBarLabel: 'TradingAccount',
          tabBarIcon: ({color, size}) => (
            <IconButton
              style={{flex: 1, padding: 0, margin: 0}}
              icon="account"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Invest"
        component={Invest}
        options={{
          tabBarLabel: 'Invest',
          tabBarIcon: ({color, size}) => (
            <IconButton
              style={{flex: 1, padding: 0, margin: 0}}
              icon="coin"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <IconButton
              style={{flex: 1, padding: 0, margin: 0}}
              icon="settings"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
