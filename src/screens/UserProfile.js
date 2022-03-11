import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Separator} from '../utils/Separator';
import colors from '../../assets/color/index';

export default function UserProfile() {
  const [modalVisible, setModalVisible] = useState(false);
  const PasswordEdit = () => (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      transparent
      hardwareAccelerated
      onRequestClose={() => setModalVisible(false)}>
      <View style={styles.centered_view}>
        <View style={styles.modal_body}>
          <Text>Change Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter old password"
            numberOfLines={1}
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter new password"
            numberOfLines={1}
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm new password"
            numberOfLines={1}
            secureTextEntry={true}
          />
          <View style={styles.button_group}>
            <TouchableOpacity
              style={styles.button_cancel}
              onPress={() => setModalVisible(false)}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.button_ok}>
              <Text>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
  return (
    <ScrollView>
      <PasswordEdit />
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
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.title}>Password</Text>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={styles.text_edit}>Edit</Text>
            </TouchableOpacity>
          </View>
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
  button_group: {
    flexDirection: 'row',
    height: 44,
    marginTop: 10,
  },
  button_cancel: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    margin: 4,
  },
  button_ok: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightGrey,
    borderRadius: 8,
    margin: 4,
  },
  centered_view: {
    flex: 1,
    backgroundColor: '#00000090',
    justifyContent: 'center',
    alignItems: 'center',
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
  input: {
    width: 260,
    marginVertical: 8,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.grey,
    fontSize: 14,
  },
  modal_body: {
    width: 300,
    height: 250,
    backgroundColor: colors.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.mediumGrey,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  name: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '800',
  },
  row: {
    marginVertical: 8,
  },
  text_edit: {
    color: colors.orange,
    textDecorationLine: 'underline',
    fontSize: 14,
    marginHorizontal: 10,
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
