import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Match from '../screens/Match/Match';
import MatchDetail from '../screens/Match/MatchDetail';
import TeamDetail from '../screens/Match/TeamDetail';

const Stack = createStackNavigator();

export default function MatchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Match"
        component={Match}
        options={{headerShown: false}}
        // screenOptions={() => ({
        //   headerShown: false,
        // })}
      />
      <Stack.Screen name="MatchDetail" component={MatchDetail} />
      <Stack.Screen name="TeamDetail" component={TeamDetail} />
    </Stack.Navigator>
  );
}
