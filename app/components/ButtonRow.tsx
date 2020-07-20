import React from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  children?: ReactNode;
}

const ButtonRow: React.FC<Props> = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ButtonRow;
