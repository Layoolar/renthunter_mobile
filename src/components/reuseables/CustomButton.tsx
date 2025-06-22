import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export default function CustomButton({ title, onPress, disabled = false }: CustomButtonProps) {
  return (
    <Pressable
      style={[styles.button, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0D1B2A',
    paddingVertical: 15,
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  disabled: {
    backgroundColor: '#A9D0FF',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});