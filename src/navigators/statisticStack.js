import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Statistic from '../screens/Statistic/Statistic';
import StatisticProfile from '../screens/Statistic/StatisticProfile';

const Stack = createStackNavigator();

export default function StatisticStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Statistic"
        component={Statistic}
        options={{headerShown: false}}
      />
      <Stack.Screen name="StatisticProfile" component={StatisticProfile} />
    </Stack.Navigator>
  );
}
