import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import SearchBar from '../../components/SearchBar';
import CategoryButton from '../../components/CategoryButton';
import MatchCard from '../../components/MatchCard';
import colors from '../../../assets/color';
import {ScrollView} from 'react-native-gesture-handler';
export default function Match() {
  return (
    <View style={style.matchScreenContainer}>
      <SearchBar />
      <View style={style.categoryButtonContainer}>
        <CategoryButton isChosen title="Lives" />
        <CategoryButton title="Comming soon" />
        <CategoryButton title="Hottest" />
      </View>
      <ScrollView>
        <MatchCard />
        <MatchCard />
        <MatchCard />
        <MatchCard />
        <MatchCard />
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  matchScreenContainer: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 19,
  },
  categoryButtonContainer: {
    marginVertical: 30,
    flexDirection: 'row',
    height: 35,
  },
});
