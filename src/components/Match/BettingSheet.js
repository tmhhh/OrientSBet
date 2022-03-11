import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../../assets/color';
import ButtonGroup from './ButtonGroup';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function BettingSheet() {
  const [modalVisible, setModalVisible] = useState(false);

  const users = [
    {id: 1, name: 'user 1'},
    {id: 2, name: 'user 1'},
    {id: 3, name: 'user 1'},
    {id: 4, name: 'user 1'},
    {id: 5, name: 'user 1'},
    {id: 6, name: 'user 1'},
    {id: 7, name: 'user 1'},
  ];

  const Dialog = () => (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      transparent
      hardwareAccelerated
      onRequestClose={() => setModalVisible(false)}>
      <View style={styles.centered_view}>
        <View style={styles.modal_body}>
          <View style={styles.close_modal}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Icon name="times" size={20} color="#999999" />
            </TouchableOpacity>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={users}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Text style={{fontSize: 15, marginVertical: 10}}>
                {item.name}
              </Text>
            )}
          />
        </View>
      </View>
    </Modal>
  );
  return (
    <View style={styles.container}>
      <Dialog />
      <View style={styles.control}></View>
      <View style={styles.table}>
        <View style={styles.cell}>
          <Text>Bet amount:</Text>
        </View>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.cell}>
          <Text style={{textDecorationLine: 'underline'}}>10</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.cell}>
          <Text style={{textDecorationLine: 'underline'}}>5</Text>
        </TouchableOpacity>
        <View style={styles.cell}>
          <Text>Bet on team:</Text>
        </View>
        <View style={[styles.cell, styles.cellSpan]}>
          <ButtonGroup />
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity activeOpacity={1} style={styles.button}>
          <Text style={styles.button_text}>30.000 Vnd</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.button, {backgroundColor: colors.orange}]}>
          <Text style={[styles.button_text, {color: colors.white}]}>
            Make a Bet
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.grey,
    marginHorizontal: 14,
    marginVertical: 12,
  },
  button_text: {
    fontSize: 16,
    fontWeight: '700',
  },
  centered_view: {
    flex: 1,
    backgroundColor: '#00000090',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
    alignItems: 'center',
  },
  cell: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  cellSpan: {
    width: '60%',
  },
  control: {
    width: 50,
    height: 5,
    borderRadius: 2,
    backgroundColor: colors.lightGrey,
  },
  close_modal: {
    width: '100%',
    alignItems: 'flex-end',
    marginEnd: 8,
  },
  table: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginVertical: 28,
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
});
