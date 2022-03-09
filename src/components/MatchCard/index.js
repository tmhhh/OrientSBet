import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../../assets/color';
const MatchCard = () => {
  return (
    <View style={style.matchCardContainer}>
      <View style={style.matchInfoContainer}>
        <View style={style.teamContainer}>
          <Image
            style={style.teamImage}
            source={{
              uri: 'https://logos-world.net/wp-content/uploads/2020/04/Barcelona-Logo.png',
            }}
          />
          <Text style={style.teamName}>Barcelona</Text>
        </View>
        <View style={style.matchInfoCenterContainer}>
          <Text style={[style.largeTitle, {color: colors.grey}]}>
            Premier League
          </Text>
          <Text style={style.largeTitle}>1 : 2</Text>
          <View style={style.matchTimeContainer}>
            <Icon color={colors.orange} name="circle" />
            <Text style={[style.smallTitle, {marginLeft: 5}]}>49:30</Text>
          </View>
        </View>
        <View style={style.teamContainer}>
          <Image
            style={style.teamImage}
            source={{
              uri: 'https://logos-world.net/wp-content/uploads/2020/04/Barcelona-Logo.png',
            }}
          />
          <Text style={style.teamName}>Barcelona</Text>
        </View>
      </View>
      <View style={style.betInfoContainer}>
        <View style={style.betInfo}>
          <Text style={style.betTitle}>0</Text>
        </View>
        <View style={style.betInfo}>
          <Text style={style.betTitle}>1.3</Text>
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  matchCardContainer: {
    height: 157,
    padding: 13,
    width: '100%',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.lightGrey,
    marginBottom: 10,
  },
  matchInfoContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  teamContainer: {
    width: 70,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  teamImage: {
    width: 50,
    height: 50,
  },
  teamName: {
    fontSize: 13,
    fontWeight: '700',
  },
  matchInfoCenterContainer: {
    justifyContent: 'center',
  },
  largeTitle: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: '600',
    textAlign: 'center',
  },
  matchTimeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  betInfoContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  betInfo: {
    width: 93,
    height: 38,
    backgroundColor: colors.lightGrey,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  betTitle: {fontSize: 13},
});
export default MatchCard;
