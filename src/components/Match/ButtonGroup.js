import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function ButtonGroup() {
  const [activeTab, setActiveTab] = useState('Team A');

  return (
    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <ButtonTab
        text="Team A"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <ButtonTab
        text="Team B"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const ButtonTab = props => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? 'black' : 'white',
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 10,
    }}
    onPress={() => props.setActiveTab(props.text)}>
    <Text
      style={{
        color: props.activeTab === props.text ? 'white' : 'black',
        fontSize: 15,
        fontWeight: '600',
      }}>
      {props.text}
    </Text>
  </TouchableOpacity>
);
