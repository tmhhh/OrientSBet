import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../../assets/color';

export default function Estimate() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Attacks</Text>
        <ProgressBar teamA={'27'} teamB={'15'} />
      </View>
      <View style={styles.row}>
        <Text>Shoots</Text>
        <ProgressBar teamA={'27'} teamB={'15'} />
      </View>
      <View style={styles.row}>
        <Text>Possession</Text>
        <ProgressBar teamA={'27'} teamB={'15'} />
      </View>
    </View>
  );
}

const ProgressBar = props => (
  <View style={styles.row}>
    <Text style={styles.value}>{props.teamA}</Text>
    <View style={styles.progress}></View>
    <Text style={styles.value}>{props.teamB}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 200,
    marginHorizontal: 24,
    marginVertical: 12,
    padding: 18,
    backgroundColor: colors.mediumGrey,
    borderRadius: 10,
  },
  progress: {
    width: 150,
    height: 2,
    backgroundColor: colors.white,
    marginHorizontal: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  value: {
    fontSize: 14,
    color: colors.white,
    fontWeight: 'bold',
  },
});
