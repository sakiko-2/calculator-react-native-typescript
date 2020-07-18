import React from 'react';
import { StyleSheet, View } from 'react-native';

import Home from './screens/Home';

const App: React.FC = () => (
  <View style={styles.container}>
    <Home />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
