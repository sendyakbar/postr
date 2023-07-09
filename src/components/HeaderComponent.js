import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text, TopNavigation} from '@ui-kitten/components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function Header() {
  const insets = useSafeAreaInsets();
  const styles = styleGenerator(insets);

  const title = () => {
    return <Text category="h3">Postr</Text>;
  };

  const rigt = () => {
    return (
      <TouchableOpacity>
        <Text>Language</Text>
      </TouchableOpacity>
    );
  };

  return (
    <TopNavigation
      alignment="start"
      title={title}
      accessoryRight={rigt}
      style={styles.container}
    />
  );
}

const styleGenerator = insets =>
  StyleSheet.create({
    container: {
      paddingTop: insets.top,
      backgroundColor: 'black',
    },
  });
