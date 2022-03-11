import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../../assets/color/index';
import {Separator} from '../../utils/Separator';
import Leader from '../../components/Team/LeaderCard';
import Player from '../../components/Team/PlayerCard';

export default function TeamDetail() {
  const playerList = [
    {
      id: 1,
      name: 'Neymar',
      role: ['player', 'goal keeper'],
      photo:
        'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/OO2LGS5XQZIKPCZ6QXMB56F43A.jpg',
      isScorer: false,
      isAssist: false,
    },
    {
      id: 2,
      name: 'Lion Messi',
      role: ['player', 'captain'],
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg',
      isScorer: true,
      isAssist: false,
    },
    {
      id: 3,
      name: 'John Doe',
      role: ['player'],
      photo:
        'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/OO2LGS5XQZIKPCZ6QXMB56F43A.jpg',
      isScorer: false,
      isAssist: true,
    },
    {
      id: 4,
      name: 'Kaka',
      role: ['player'],
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg',
      isScorer: false,
      isAssist: false,
    },
    {
      id: 5,
      name: 'Neymar',
      role: ['player'],
      photo:
        'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/OO2LGS5XQZIKPCZ6QXMB56F43A.jpg',
      isScorer: false,
      isAssist: false,
    },
    {
      id: 6,
      name: 'Lion Messi',
      role: ['player'],
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg',
      isScorer: false,
      isAssist: false,
    },
    {
      id: 7,
      name: 'John Doe',
      role: ['player'],
      photo:
        'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/OO2LGS5XQZIKPCZ6QXMB56F43A.jpg',
      isScorer: false,
      isAssist: false,
    },
    {
      id: 8,
      name: 'Kaka',
      role: ['player'],
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg',
      isScorer: false,
      isAssist: false,
    },
    {
      id: 9,
      name: 'Neymar',
      role: ['player'],
      photo:
        'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/OO2LGS5XQZIKPCZ6QXMB56F43A.jpg',
      isScorer: false,
      isAssist: false,
    },
    {
      id: 10,
      name: 'Lion Messi',
      role: ['player'],
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg',
      isScorer: false,
      isAssist: false,
    },
    {
      id: 11,
      name: 'John Doe',
      role: ['player'],
      photo:
        'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/OO2LGS5XQZIKPCZ6QXMB56F43A.jpg',
      isScorer: false,
      isAssist: false,
    },
    {
      id: 12,
      name: 'John Doe',
      role: ['player'],
      photo:
        'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/OO2LGS5XQZIKPCZ6QXMB56F43A.jpg',
      isScorer: false,
      isAssist: false,
    },
  ];
  const coach = {
    name: 'Leonardo James',
    role: ['coach'],
    photo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzRizLmM2tKYGLHQNf9MtRM1Pgc31zdc8wLQ&usqp=CAU',
    isScorer: false,
    isAssist: false,
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}>Team Infor</Text>
      <Separator style={{backgroundColor: colors.orange}} />
      <View style={{alignItems: 'center'}}>
        <Leader item={coach} />
        <View style={styles.row}>
          <View>
            <Text style={styles.title}>Captain</Text>
            {playerList.map(item => {
              if (item.role[1] === 'captain') {
                return <Leader item={item} />;
              }
            })}
          </View>
          <View>
            <Text style={styles.title}>Top Assist</Text>
            {playerList.map(item => {
              if (item.isAssist) {
                return <Leader item={item} />;
              }
            })}
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.title}>Top Scorer</Text>
            {playerList.map(item => {
              if (item.isScorer) {
                return <Leader item={item} />;
              }
            })}
          </View>
        </View>
      </View>
      <Separator style={{backgroundColor: colors.grey}} />
      <View style={{flex: 1}}>
        <FlatList
          data={playerList}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          renderItem={({item}) => <Player item={item} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGrey,
    flex: 1,
  },
  headingText: {
    fontSize: 24,
    color: colors.white,
    fontWeight: 'bold',
    marginVertical: 12,
    marginStart: 12,
  },
  player: {},
  row: {
    marginTop: 12,
    flexDirection: 'row',
  },
  title: {
    fontSize: 14,
    color: colors.white,
    marginStart: 12,
    fontWeight: 'bold',
  },
});
