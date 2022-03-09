import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import AntDIcon from 'react-native-vector-icons/AntDesign';
import colors from '../../../assets/color';
const SearchBar = () => {
  return (
    <View style={style.searchBarContainer}>
      <AntDIcon style={style.searchBarIcon} name="search1" />
      <TextInput
        style={style.searchInput}
        placeholder="Search by events, teams"
        placeholderTextColor={colors.black}
      />
    </View>
  );
};
const style = StyleSheet.create({
  searchBarContainer: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 10,
    borderRadius: 10,

    alignItems: 'center',
  },
  searchBarIcon: {
    fontSize: 30,
    color: colors.black,
  },
  searchInput: {
    color: colors.black,
    width: '80%',
    height: '100%',
    paddingVertical: 12,
  },
});
export default SearchBar;
