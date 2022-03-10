import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import AntDIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MatchCard from '../components/MatchCard';
import SearchBar from '../components/SearchBar';
import colors from '../../assets/color';
import banner from '../../assets/images/banner.png';
import person from '../../assets/images/person.png';
import CategoryButton from '../components/CategoryButton';
export default function Home() {
  return (
    <View style={style.homeScreenContainer}>
      <View style={style.headerContainer}>
        <View style={style.headerTitleContainer}>
          <Text style={style.largeHeader} t>
            Hello,
          </Text>
          <Text style={[style.largeHeader, {fontWeight: '700', marginTop: 5}]}>
            John Dwe
          </Text>
        </View>
        <View style={style.iconBackground}>
          <AntDIcon size={30} name="plus" color={colors.white} />
        </View>
      </View>
      <SearchBar />

      <Text style={style.largeTitle}>Tournaments</Text>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={style.backgroundImageContainer}>
        <ImageBackground
          style={[style.backgroundImage, {position: 'relative'}]}
          resizeMode="cover"
          // source={{
          //   uri: 'https://media.bongda.com.vn/files/hai.phan/2021/04/20/statement_graphic_pl_pinkpng-2054.jpg',
          // }}
          source={banner}
        />
        <Image
          style={{position: 'absolute', bottom: '0%', left: 150, zIndex: 10}}
          source={person}
        />
        <ImageBackground
          style={[style.backgroundImage, {marginLeft: 26}]}
          resizeMode="cover"
          source={{
            uri: 'https://media.bongda.com.vn/files/hai.phan/2021/04/20/statement_graphic_pl_pinkpng-2054.jpg',
          }}
        />
      </ScrollView>
      <Text style={style.largeTitle}>Top Events</Text>

      <View style={style.categoriesContainer}>
        <CategoryButton icon="football" title="Football" />
        <CategoryButton icon="basketball" title="NBA" />
      </View>
      <ScrollView>
        <MatchCard />
        <MatchCard />
        <MatchCard />
      </ScrollView>
    </View>
  );
}
const style = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
    paddingHorizontal: 19,
    paddingVertical: 24,
    backgroundColor: colors.white,
  },
  headerContainer: {
    width: '100%',
    height: 72,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 19,
  },
  headerTitleContainer: {
    height: '100%',
  },
  iconBackground: {
    backgroundColor: colors.orange,
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  largeHeader: {
    fontSize: 24,
  },
  largeTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.grey,
    marginVertical: 20,
  },
  backgroundImageContainer: {
    width: '100%',
    height: 130,
    minHeight: 130,
    flexDirection: 'row',
    overflow: 'visible',
  },
  backgroundImage: {
    height: '100%',
    overflow: 'hidden',
    borderRadius: 10,
    width: 290,
  },
  categoriesContainer: {
    flexDirection: 'row',
    height: 37,
    marginLeft: -10,
    marginBottom: 19,
  },
  // categoryContainer: {
  //   // padding: 14,
  //   backgroundColor: colors.black,
  //   borderRadius: 10,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   paddingHorizontal: 10,
  // },
  // smallTitle: {
  //   marginLeft: 5,
  //   fontSize: 13,
  //   fontWeight: '700',
  //   color: colors.white,
  // },
});
