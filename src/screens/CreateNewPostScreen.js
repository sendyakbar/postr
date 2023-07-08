import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function CreateNewPostScreen() {
  const insets = useSafeAreaInsets();
  const styles = styleGenerator(insets);

  return (
    <Layout style={styles.container}>
      <Text category="h2">Hello this is Create New Post Screen</Text>
    </Layout>
  );
}

const styleGenerator = insets =>
  StyleSheet.create({
    container: {
      flex: 1,
      // Paddings to handle safe area
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingHorizontal: 16,
    },
  });
