import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import colors from '../../../assets/color';
import UserCard from '../../components/UserCard';
import SearchBar from '../../components/SearchBar';

export default function Statistic() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        padding: 19,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: '700'}}>Accumulated</Text>
        <Text>
          <Text style={{fontWeight: '700', fontSize: 17, color: colors.orange}}>
            2,000,000
          </Text>
          <Text style={{fontSize: 17}}> VND</Text>
        </Text>
      </View>
      <SearchBar />
      <ScrollView
        style={{marginTop: 10}}
        contentContainerStyle={{alignItems: 'center'}}>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </ScrollView>
    </View>
  );
}
