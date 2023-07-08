import React from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Layout, Text} from '@ui-kitten/components';

export default function FeedScreen() {
  const insets = useSafeAreaInsets();
  const styles = styleGenerator(insets);

  return (
    <Layout style={styles.container}>
      <Text category="h1">Hello this is feed screen</Text>
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
