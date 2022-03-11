import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import colors from '../../../assets/color/index';
import Input from '../../components/Input/Input';

const bgImage = require('../../../assets/images/Background.png');
const fbIcon = require('../../../assets/images/FacebookIcon.png');
const ggIcon = require('../../../assets/images/GoogleIcon.png');

export default function Login() {
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
        <View style={styles.loginForm}>
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior="position"
            keyboardVerticalOffset={-130}>
            {/* temporary distance */}
            <Text
              style={{
                color: colors.black,
                fontSize: 40,
                marginBottom: 10,
              }}>
              Login
            </Text>
            <Input style={styles.input} title="Email" />
            <Input title="Password" secure={true} />
            <Text
              style={{
                color: colors.orange,
                fontWeight: 'bold',
                marginTop: 10,
                left: '40%',
              }}>
              Forgot Password?
            </Text>
            <Text
              style={{
                color: colors.black,
                marginTop: 10,
                marginBottom: 10,
                marginLeft: 5,
              }}>
              Or login with
            </Text>
            <View style={styles.iconContainer}>
              <Image source={ggIcon} />
              <Image style={styles.icon} source={fbIcon} />
            </View>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  loginForm: {
    flex: 1,
    left: '6%',
    top: '45%',
  },
  input: {
    marginTop: 20,
    marginBottom: 23,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 22,
  },
});
