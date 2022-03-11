import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../../assets/color'

export default function Player(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.photo} source={{uri: props.item.photo}}/>
      <View>
        <Text style={styles.name}>{props.item.name}</Text>
        <Text style={styles.role}>{props.item.role[1] ? props.item.role[1]: props.item.role[0]}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 6,
    backgroundColor: colors.lightGrey,
    borderRadius: 10,
  },
  photo: {
    height: 50,
    width: 50,
    borderRadius: 5,
    margin: 6
  },
  name:{
    fontSize: 14,
    color: colors.darkGrey,
    marginBottom: 4,
    fontWeight: '500'
  },
  role:{
    fontSize: 13,
    color: colors.white
  }
})