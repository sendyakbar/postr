import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';

import RootNavigator from './src/navigation/RootNavigator';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ApplicationProvider {...eva} theme={eva.dark}>
        <SafeAreaProvider>
          <NavigationContainer>
            <StatusBar
              barStyle="light-content"
              backgroundColor="transparent"
              translucent
            />
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </ApplicationProvider>
    </QueryClientProvider>
  );
}

export default App;
