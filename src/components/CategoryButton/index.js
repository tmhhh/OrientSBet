import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../assets/color';
const CategoryButton = ({icon, title, isChosen = false}) => {
  return (
    <View style={style.categoryContainer(isChosen)}>
      {icon && (
        <Ionicons
          color={isChosen ? colors.white : colors.black}
          size={20}
          name={icon}
        />
      )}
      <Text style={style.smallTitle(isChosen)}>{title}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  categoryContainer: isChosen => ({
    marginLeft: 10,
    backgroundColor: isChosen ? colors.black : colors.lightGrey,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  }),
  smallTitle: isChosen => ({
    color: !isChosen ? colors.black : colors.white,
    marginLeft: 5,
    fontSize: 13,
    fontWeight: '700',
  }),
});
export default CategoryButton;
