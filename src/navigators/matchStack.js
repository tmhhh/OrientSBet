import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Match from '../screens/Match/Match';
import MatchDetail from '../screens/Match/MatchDetail';
import TeamDetail from '../screens/Match/TeamDetail';

const Stack = createStackNavigator();

export default function MatchStack() {
  return (
    <Stack.Navigator initialRouteName='MatchDetail'>
      <Stack.Screen name="Match" component={Match} />
      <Stack.Screen name="MatchDetail" component={MatchDetail} options={{headerShown: false}}/>
      <Stack.Screen name="TeamDetail" component={TeamDetail} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}
