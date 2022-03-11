import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {Separator} from '../utils/Separator';
import colors from '../../assets/color/index';

export default function UserProfile() {
  return (
    <ScrollView>
      <ImageBackground
        style={styles.image_background}
        source={require('../../assets/images/background.jpeg')}>
        <Image
          style={styles.image_avatar}
          source={require('../../assets/images/teamLogo.png')}
        />
      </ImageBackground>
      <View style={styles.body}>
        <Text style={styles.name}>Nguyen Van A</Text>
        <Separator style={{backgroundColor: '#999'}} />
        <View style={styles.row}>
          <Text style={styles.title}>UserID:</Text>
          <Text style={styles.value}>hoang.truong</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Email:</Text>
          <Text style={styles.value}>hoang.truong@orientsoftware.com</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Password</Text>
          <Text style={styles.value}>*****</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Win rate:</Text>
          <Text style={styles.value}>30%</Text>
        </View>

        <View>
          <Text style={styles.bet_text}>Betting:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image
              style={styles.bet_on}
              source={require('../../assets/images/teamLogo.png')}
            />
            <Image
              style={styles.bet_on}
              source={require('../../assets/images/teamLogo.png')}
            />
            <Image
              style={styles.bet_on}
              source={require('../../assets/images/teamLogo.png')}
            />
            <Image
              style={styles.bet_on}
              source={require('../../assets/images/teamLogo.png')}
            />
            <Image
              style={styles.bet_on}
              source={require('../../assets/images/teamLogo.png')}
            />
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bet_on: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  bet_text: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 12,
  },
  body: {
    marginTop: 60,
    padding: 18,
  },
  image_avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'contain',
    position: 'absolute',
    backgroundColor: 'pink',
    bottom: -50,
  },
  image_background: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    position: 'relative',
    alignItems: 'center',
  },
  name: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '800',
  },
  row: {
    marginVertical: 8,
  },
  title: {
    color: colors.grey,
    marginVertical: 8,
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
  },
});
