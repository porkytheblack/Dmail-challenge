import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { store } from './redux';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store} >
        <SafeAreaProvider>
          <SafeAreaView style={{width: "100%", height: "100%"}} >
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaView>
        </SafeAreaProvider>
      </Provider>
    );
  }
}
