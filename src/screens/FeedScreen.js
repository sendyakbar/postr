import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function FeedScreen() {
  const insets = useSafeAreaInsets();
  const styles = styleGenerator(insets);

  return (
    <View style={styles.container}>
      <Text>Hello this is feed screen</Text>
    </View>
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
