import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DividerWithText({ text = 'or' }) {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  text: {
    marginHorizontal: 10,
    color: '#666',
    fontSize: 14,
  },
});