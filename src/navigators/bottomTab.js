import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/Home';
import UserProfile from '../screens/UserProfile';
import MatchStack from './matchStack';
import StatisticStack from './statisticStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/color';
const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Match') {
            iconName = focused ? 'football' : 'football-outline';
          } else if (route.name === 'Statistic') {
            iconName = focused ? 'stats-chart' : 'stats-chart-outline';
          } else {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={colors.black} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Match" component={MatchStack} />
      <Tab.Screen name="Statistic" component={StatisticStack} />
      <Tab.Screen name="UserProfile" component={UserProfile} />
    </Tab.Navigator>
  );
}
