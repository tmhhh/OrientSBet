import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../../assets/color';

const UserCard = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.userAvatar}
        source={{
          uri: 'https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png',
        }}
      />
      <View style={styles.userInfoContainer}>
        <Text style={styles.userName}>Nguyen Van A</Text>
        <Text style={styles.userEmail}>nguyenvana@gmail.com</Text>
      </View>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo(1)}
          source={{
            uri: 'https://logos-world.net/wp-content/uploads/2020/04/Barcelona-Logo.png',
          }}
        />
        <Image
          style={styles.logo(2)}
          source={{
            uri: 'https://www.inlogo.vn/vnt_upload/File/Image/vsnMeOX.png',
          }}
        />
        <View
          style={[
            styles.logo(3),
            {
              borderRadius: 35 / 2,
              backgroundColor: colors.grey,
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <Text style={{fontWeight: '600'}}>+1</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    // alignSelf: 'center',
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    backgroundColor: colors.white,
    height: 80,
  },
  userAvatar: {
    height: 50,
    width: 50,
    resizeMode: 'cover',
  },
  userInfoContainer: {},
  userName: {
    fontSize: 18,
    fontWeight: '700',
  },
  userEmail: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.grey,
  },
  logoContainer: {
    flexDirection: 'row',
  },
  logo: index => ({
    zIndex: index,
    marginLeft: index !== 0 && -17,
    height: 35,
    width: 35,
    resizeMode: 'cover',
  }),
});

export default UserCard;
