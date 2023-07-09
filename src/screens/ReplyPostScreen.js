import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Button, Input, Layout, Spinner, Text} from '@ui-kitten/components';
import {useRoute} from '@react-navigation/native';
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {v4 as uuidv4} from 'uuid';
import Toast from 'react-native-toast-message';
import {useTranslation} from 'react-i18next';
import Geolocation from '@react-native-community/geolocation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import FeedItemComponent from '../components/FeedItemComponent';
import {queryKey} from '../utils/Constants';
import {CreateReplies, GetReplies} from '../service/Service';

const maxChar = 100;

export default function ReplyPostScreen() {
  const route = useRoute();
  const queryClient = useQueryClient();
  const {t} = useTranslation();
  const insets = useSafeAreaInsets();
  const styles = styleGenerator(insets);
  const {data} = route.params;
  const [content, setContent] = useState('');
  const {data: replies, isInitialLoading: isLoadingReplies} = useQuery({
    queryKey: [queryKey.REPLIES, data.id],
    queryFn: () => GetReplies(data.id),
    keepPreviousData: true,
  });
  const {mutate, isLoading} = useMutation({
    mutationFn: CreateReplies,
    onSuccess: event => {
      console.log(event);
      queryClient.invalidateQueries({queryKey: [queryKey.REPLIES]});
      Toast.show({
        type: 'success',
        text1: 'Yeay!',
        text2: event,
      });
    },
  });

  const onChangeReply = input => {
    setContent(input);
  };

  const onPressReply = () => {
    const userId = uuidv4();
    Geolocation.getCurrentPosition(info => {
      mutate({
        userId,
        postId: data.id,
        text: content,
        geoLocation: {
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        },
      });
      setContent('');
    });
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.replyItemContainer}>
        <FeedItemComponent {...item} />
      </View>
    );
  };

  return (
    <Layout style={styles.container}>
      <View style={styles.header}>
        <FeedItemComponent {...data} />
      </View>
      {isLoadingReplies ? (
        <Layout style={styles.loadingContainer}>
          <Spinner size="giant" />
        </Layout>
      ) : (
        <FlatList
          data={replies}
          renderItem={renderItem}
          keyExtractor={(_, i) => String(i)}
          contentContainerStyle={styles.repliesContainer}
        />
      )}
      <View style={styles.footer}>
        <Input
          placeholder={t('common:type_your_reply_here')}
          style={styles.input}
          multiline
          onChangeText={onChangeReply}
          value={content}
        />
        <Button
          appearance="outline"
          size="small"
          style={styles.button}
          onPress={onPressReply}
          disabled={content.length > maxChar || isLoading}>
          {isLoading ? (
            <Spinner size="small" status="control" />
          ) : (
            <Text>{t('common:reply').toUpperCase()}</Text>
          )}
        </Button>
      </View>
      <View style={styles.bottomInfo}>
        <Text status={content.length > maxChar ? 'danger' : 'basic'}>
          {`${content.length}/${maxChar}`}
        </Text>
      </View>
    </Layout>
  );
}

const styleGenerator = insets =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: insets.bottom,
    },
    replyItemContainer: {
      paddingLeft: 32,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    repliesContainer: {
      flexGrow: 1,
      paddingHorizontal: 16,
    },
    header: {
      paddingHorizontal: 16,
    },
    footer: {
      paddingHorizontal: 16,
      paddingTop: 16,
      backgroundColor: 'black',
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    input: {
      flex: 1,
      paddingRight: 8,
    },
    button: {
      height: 39,
    },
    bottomInfo: {
      backgroundColor: 'black',
      paddingHorizontal: 16,
      paddingVertical: 4,
    },
  });
