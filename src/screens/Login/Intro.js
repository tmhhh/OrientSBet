import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
const image = require('../../../assets/images/Welcome.png');

export default function Intro({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
    return;
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
});
