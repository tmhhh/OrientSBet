import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../assets/color';
const CategoryButton = ({icon, title, isChosen = false}) => {
  const style = StyleSheet.create({
    categoryContainer: {
      marginLeft: 10,
      backgroundColor: isChosen ? colors.black : colors.lightGrey,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    smallTitle: {
      color: !isChosen ? colors.black : colors.white,
      marginLeft: 5,
      fontSize: 13,
      fontWeight: '700',
    },
  });
  return (
    <View style={style.categoryContainer}>
      {icon && <Ionicons color={colors.white} size={20} name={icon} />}
      <Text style={style.smallTitle}>{title}</Text>
    </View>
  );
};

export default CategoryButton;
