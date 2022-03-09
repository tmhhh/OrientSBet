import {Text, View} from 'react-native';
import React, {Component} from 'react';
import LoginStack from './loginStack';
import MatchStack from './matchStack';
import StatisticStack from './statisticStack';
import UserProfile from '../screens/UserProfile';
import Home from '../screens/Home';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Match" component={MatchStack} />
      <Tab.Screen name="Statistic" component={StatisticStack} />
      <Tab.Screen name="UserProfile" component={UserProfile} />
    </Tab.Navigator>
  );
}
