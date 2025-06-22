import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface SocialLoginButtonProps {
  provider: 'google' | 'facebook';
  title: string;
  onPress: () => void;
}

export default function SocialLoginButton({
  provider,
  title,
  onPress,
}: SocialLoginButtonProps) {
  let icon;

  if (provider === 'google') {
    icon = (
      <Image
        source={require('../../../assets/google-img.png')}
        style={{ width: 20, height: 20, marginRight: 10 }}
      />
    );
  } else if (provider === 'facebook') {
    icon = <AntDesign name="facebook-square" size={24} color="#3b5998" />;
  }

  return (
    <Pressable style={styles.button} onPress={onPress}>
      {icon}
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 20,
    marginTop: 10,
  },
  text: {
    color: '#333',
    fontSize: 16,
    marginLeft: 10,
  },
});