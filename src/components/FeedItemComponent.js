import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text, Divider, Avatar} from '@ui-kitten/components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

export default function FeedItemComponent(data) {
  const insets = useSafeAreaInsets();
  const styles = styleGenerator(insets);
  const navigation = useNavigation();
  const createdAt = data.createdAt;
  const date = createdAt.getDate();
  const month = createdAt.getMonth();
  const year = createdAt.getFullYear();

  const onPressItem = () => {
    navigation.navigate('ReplyPostScreen', {data});
  };

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onPressItem}>
        <View>
          <Avatar
            shape="round"
            size="large"
            source={{
              uri: 'https://akveo.github.io/react-native-ui-kitten/docs/assets/playground-build/static/media/icon.36f92bd4.png',
            }}
          />
        </View>
        <View style={styles.textCol}>
          <Text category="h6">
            {`@${data.userId.slice(0, 8)}   `}|
            <Text>{`   ${date}/${month + 1}/${year}`}</Text>
          </Text>
          <Text style={styles.contentText}>{data.text}</Text>
          <Text category="c1" status="warning" style={styles.location}>
            {`Lat: ${data.geoLocation.latitude}   `} &bull;
            {`    Lng: ${data.geoLocation.longitude}`}
          </Text>
        </View>
      </TouchableOpacity>
      <Divider style={styles.divider} />
    </>
  );
}

const styleGenerator = insets =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingVertical: 16,
    },
    textCol: {
      flex: 1,
      paddingLeft: 16,
    },
    divider: {
      backgroundColor: 'white',
    },
    contentText: {
      marginTop: 8,
    },
    location: {
      marginTop: 8,
    },
  });
