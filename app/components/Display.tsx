import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  text: string;
}

const Display: React.FC<Props> = ({ text }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 3,
    width: '90%',
    backgroundColor: '#000',
    justifyContent: 'flex-end',
    padding: 10,
  },
  text: {
    color: '#fff',
    fontSize: 80,
    textAlign: 'right',
  },
});

export default Display;
