import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './navigations';

export default () => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};
