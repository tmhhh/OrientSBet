import {View, Text} from 'react-native';
import React, { useEffect } from 'react';

export default function Match({navigation}) {
  useEffect(() => {navigation.navigate('MatchDetail')}, [])
  return (
    <View>
      <Text>Match</Text>
    </View>
  );
}
