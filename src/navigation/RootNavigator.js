import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';

import FeedScreen from '../screens/FeedScreen';
import CreateNewPostScreen from '../screens/CreateNewPostScreen';
import ReplyPostScreen from '../screens/ReplyPostScreen';
import Header from '../components/HeaderComponent';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
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
            title: 'Create Post',
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
            title: 'Reply Post',
          }}
        />
      </Stack.Navigator>
      <Toast />
    </>
  );
}
