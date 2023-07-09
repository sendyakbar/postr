import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import {useTranslation} from 'react-i18next';

import FeedScreen from '../screens/FeedScreen';
import CreateNewPostScreen from '../screens/CreateNewPostScreen';
import ReplyPostScreen from '../screens/ReplyPostScreen';
import Header from '../components/HeaderComponent';
import LanguageSettingScreen from '../screens/LanguageSettingScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const {t} = useTranslation();

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="FeedScreen"
          component={FeedScreen}
          options={{
            header: Header,
          }}
        />
        <Stack.Screen
          name="CreateNewPostScreen"
          component={CreateNewPostScreen}
          options={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
            title: t('common:create_post'),
          }}
        />
        <Stack.Screen
          name="ReplyPostScreen"
          component={ReplyPostScreen}
          options={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
            title: t('common:reply_post'),
          }}
        />
        <Stack.Screen
          name="LanguageSettingScreen"
          component={LanguageSettingScreen}
          options={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
            title: t('common:language'),
          }}
        />
      </Stack.Navigator>
      <Toast />
    </>
  );
}
