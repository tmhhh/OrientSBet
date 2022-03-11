import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/Home';
import UserProfile from '../screens/UserProfile';
import MatchStack from './matchStack';
import StatisticStack from './statisticStack';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Match" component={MatchStack} options={{headerShown: false}}/>
      <Tab.Screen name="Statistic" component={StatisticStack} options={{headerShown: false}}/>
      <Tab.Screen name="UserProfile" component={UserProfile} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
}
