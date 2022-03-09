import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import { Separator } from '../../utils/Separator';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../../assets/color';

export default function MatchDetail() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}>Premier League</Text>
      <Separator style={{backgroundColor: colors.orange}}/>
      <View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGrey,
    flex: 1,
  },
  headingText:{
    fontSize: 24, 
    color: colors.white,
    fontWeight: 'bold',
    marginVertical: 12,
    marginStart: 12
  },
})
