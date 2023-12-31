import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button, Layout, Spinner, Text} from '@ui-kitten/components';
import {useQuery} from '@tanstack/react-query';
import {useTranslation} from 'react-i18next';

import {queryKey} from '../utils/Constants';
import FeedItemComponent from '../components/FeedItemComponent';
import {GetPosts} from '../service/Service';

export default function FeedScreen({navigation}) {
  const insets = useSafeAreaInsets();
  const styles = styleGenerator(insets);
  const {t} = useTranslation();
  const {data, isLoading} = useQuery({
    queryKey: [queryKey.POSTS],
    queryFn: GetPosts,
  });

  const onPressCreate = () => {
    navigation.navigate('CreateNewPostScreen');
  };

  if (isLoading) {
    return (
      <Layout style={styles.loadingContainer}>
        <Spinner size="giant" />
      </Layout>
    );
  }

  const renderItem = ({item}) => {
    return <FeedItemComponent {...item} />;
  };

  return (
    <Layout style={styles.wrapper}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, i) => String(i)}
        contentContainerStyle={styles.container}
      />
      <View style={styles.footer}>
        <Button appearance="outline" onPress={onPressCreate}>
          <Text>{t('common:create_new_post').toUpperCase()}</Text>
        </Button>
      </View>
    </Layout>
  );
}

const styleGenerator = insets =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      // Paddings to handle safe area
      paddingBottom: insets.bottom,
    },
    container: {
      flexGrow: 1,
      paddingHorizontal: 16,
    },
    footer: {
      padding: 16,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
