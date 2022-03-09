import {createStackNavigator} from '@react-navigation/stack';
import Statistic from '../screens/Statistic/Statistic';
import StatisticProfile from '../screens/Statistic/StatisticProfile';
import React from 'react';

const Stack = createStackNavigator();

export default function StatisticStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Statistic" component={Statistic} />
      <Stack.Screen name="StatisticProfile" component={StatisticProfile} />
    </Stack.Navigator>
  );
}
