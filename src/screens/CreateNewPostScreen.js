import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Layout, Text, Input, Button, Spinner} from '@ui-kitten/components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {v4 as uuidv4} from 'uuid';
import Toast from 'react-native-toast-message';
import {useTranslation} from 'react-i18next';
import Geolocation from '@react-native-community/geolocation';

import {CreatePost} from '../service/Service';
import {queryKey} from '../utils/Constants';

const maxChar = 100;

export default function CreateNewPostScreen({navigation}) {
  const insets = useSafeAreaInsets();
  const styles = styleGenerator(insets);
  const queryClient = useQueryClient();
  const {t} = useTranslation();
  const [content, setContent] = useState('');
  const {mutate, isLoading} = useMutation({
    mutationFn: CreatePost,
    onSuccess: event => {
      queryClient.invalidateQueries({queryKey: [queryKey.POSTS]});
      Toast.show({
        type: 'success',
        text1: 'Yeay!',
        text2: event,
      });
      navigation.goBack();
    },
  });

  const onChangeContent = input => {
    setContent(input);
  };

  const onPressPost = () => {
    const userId = uuidv4();
    Geolocation.getCurrentPosition(info => {
      console.log(info);
      mutate({
        userId,
        text: content,
        geoLocation: {
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        },
      });
    });
  };

  return (
    <Layout style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          placeholder={`${t('common:type_your_post_here')}...`}
          multiline
          onChangeText={onChangeContent}
          value={content}
        />
        <Text
          status={content.length > maxChar ? 'danger' : 'basic'}
          style={styles.charCount}>
          {`${content.length}/${maxChar}`}
        </Text>
      </View>
      <View style={styles.footer}>
        <Button
          appearance="outline"
          disabled={content.length > maxChar || isLoading}
          onPress={onPressPost}>
          {isLoading ? (
            <Spinner size="small" status="control" />
          ) : (
            <Text>{t('common:post').toUpperCase()}</Text>
          )}
        </Button>
      </View>
    </Layout>
  );
}

const styleGenerator = insets =>
  StyleSheet.create({
    container: {
      flex: 1,
      // Paddings to handle safe area
      paddingTop: 16,
      paddingBottom: insets.bottom,
      paddingHorizontal: 16,
    },
    inputContainer: {
      flex: 1,
    },
    footer: {
      paddingVertical: 16,
    },
    charCount: {
      marginTop: 4,
    },
  });
