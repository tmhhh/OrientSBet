import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Register from '../screens/Login/Register';
import Intro from '../screens/Login/Intro';
import React from 'react';

const Stack = createStackNavigator();

export default function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
