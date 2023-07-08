import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedScreen from '../screens/FeedScreen';
import CreateNewPostScreen from '../screens/CreateNewPostScreen';
import ReplyPostScreen from '../screens/ReplyPostScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateNewPostScreen"
        component={CreateNewPostScreen}
      />
      <Stack.Screen name="ReplyPostScreen" component={ReplyPostScreen} />
    </Stack.Navigator>
  );
}
