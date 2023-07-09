import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text, TopNavigation} from '@ui-kitten/components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const {t} = useTranslation();
  const styles = styleGenerator(insets);

  const onPressLang = () => {
    navigation.navigate('LanguageSettingScreen');
  };

  const title = () => {
    return <Text category="h3">Postr</Text>;
  };

  const rigt = () => {
    return (
      <TouchableOpacity onPress={onPressLang}>
        <Text>{t('common:language')}</Text>
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
