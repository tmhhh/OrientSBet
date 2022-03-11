import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Separator} from '../../utils/Separator';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../../assets/color';
import Team from '../../components/Match/Team';
import Estimate from '../../components/Match/Estimate';
import BettingSheet from '../../components/Match/BettingSheet';

export default function MatchDetail() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Premier League</Text>
      <Separator style={{backgroundColor: colors.orange}} />
      <View style={{marginVertical: 12}}>
        <Team />
        <Team />
      </View>
      <View style={styles.liveContainer}>
        <View style={styles.live}></View>
        <Text style={styles.liveText}>49 : 30</Text>
      </View>
      <Estimate />
      <BettingSheet />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGrey,
    flex: 1,
    marginTop: 36,
  },
  headingText: {
    fontSize: 24,
    color: colors.white,
    fontWeight: 'bold',
    marginVertical: 12,
    marginStart: 12,
    textAlign: 'center',
  },
  liveContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  live: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.orange,
    marginRight: 8,
  },
  liveText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
