import { StyleSheet, View } from 'react-native'
import React from 'react'

export const Separator = (props) => (
  <View style={[styles.separator, {...props.style}]} />
)

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    height: 2,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})