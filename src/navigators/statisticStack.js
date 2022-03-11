import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Statistic from '../screens/Statistic/Statistic';
import StatisticProfile from '../screens/Statistic/StatisticProfile';

const Stack = createStackNavigator();

export default function StatisticStack() {
  return (
    <Stack.Navigator initialRouteName="StatisticProfile">
      <Stack.Screen name="Statistic" component={Statistic} />
      <Stack.Screen name="StatisticProfile" component={StatisticProfile} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}
