import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Layout, Radio, Text} from '@ui-kitten/components';
import {t} from 'i18next';
import {useTranslation} from 'react-i18next';

const languages = [
  {code: 'id', label: 'Bahasa Indonesia'},
  {code: 'en', label: 'English'},
];

export default function LanguageSettingScreen({navigation}) {
  const {i18n} = useTranslation();
  const selectedLanguageCode = i18n.language;

  const onPressItem = lng => () => {
    i18n.changeLanguage(lng.code);
    navigation.goBack();
  };

  return (
    <Layout style={styles.container}>
      {languages.map((lng, i) => {
        const selectedLanguage = lng.code === selectedLanguageCode;
        return (
          <TouchableOpacity
            key={i}
            onPress={onPressItem(lng)}
            style={styles.itemContainer}>
            <Radio
              checked={selectedLanguage}
              status="primary"
              onChange={onPressItem(lng)}
            />
            <Text
              style={[
                styles.text,
                {fontWeight: selectedLanguage ? 'bold' : 'normal'},
              ]}>
              {lng.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    padding: 10,
    fontSize: 18,
  },
});
