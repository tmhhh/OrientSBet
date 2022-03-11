import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../../assets/color';

export default function Team() {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <View style={styles.badge}></View>
        <Image
          style={styles.photo}
          source={require('../../../assets/images/teamLogo.png')}
        />
        <Text style={styles.name}>Manchester United</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={[styles.score, {color: colors.mediumGrey}]}>0</Text>
        <Text style={[styles.score, {color: colors.white}]}>1</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    width: 15,
    height: 40,
    backgroundColor: colors.orange,
    marginRight: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    color: colors.white,
    fontWeight: '600',
    marginHorizontal: 10,
  },
  photo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  score: {
    fontSize: 32,
    fontWeight: '700',
    marginHorizontal: 10,
  },
});
