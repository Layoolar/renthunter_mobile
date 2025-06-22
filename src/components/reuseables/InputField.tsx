import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface InputFieldProps {
  label: string;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  containerStyle?: object; 
}

export default function InputField({ 
  label, 
  placeholder, 
  value, 
  onChangeText, 
  secureTextEntry = false, 
  containerStyle 
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !showPassword}
          placeholderTextColor="#aaa"
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
            <AntDesign
              name={showPassword ? 'eye' : 'eyeo'}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 16,
    color: '#000',
  },
});