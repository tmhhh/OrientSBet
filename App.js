import React from 'react';
import BottomTab from './src/navigators/bottomTab';
import {NavigationContainer} from '@react-navigation/native';
import LoginStack from './src/navigators/loginStack';
import BottomTab from './src/navigators/bottomTab';

export default function App() {
  return (
    <NavigationContainer>
      <LoginStack />
      <BottomTab />
    </NavigationContainer>
  );
}
