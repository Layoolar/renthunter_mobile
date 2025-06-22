import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import InputField from '../../components/reuseables/InputField';
import CustomButton from '../../components/reuseables/CustomButton';
import DividerWithText from '../../components/reuseables/DividerWithText';
import SocialLoginButton from '../../components/reuseables/SocialLoginButton';
import { navigate } from 'expo-router/build/global-state/routing';

export default function SignupScreen() {
  const navigation = useNavigation();
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Replace this with real sign-up logic
    alert('Signing up...');
    // Navigate to home or account screen after successful signup
    // router.push('/home');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Title */}
        <Text style={styles.title}>Sign Up</Text>

        {/* First Name & Last Name Row */}
        <View style={styles.row}>
          <InputField
            label="First Name"
            placeholder="John"
            value={firstName}
            onChangeText={setFirstName}
            containerStyle={{ flex: 1, marginRight: 5 }}
          />
          <InputField
            label="Last Name"
            placeholder="Doe"
            value={lastName}
            onChangeText={setLastName}
            containerStyle={{ flex: 1, marginLeft: 5 }}
          />
        </View>

        {/* Email Field */}
        <InputField
          label="Email"
          placeholder="example@email.com"
          value={email}
          onChangeText={setEmail}
        />

        {/* Password Field */}
        <InputField
          label="Password"
          placeholder="••••••••"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Sign Up Button */}
        <CustomButton title="Sign Up" onPress={handleSignUp} />

        {/* Continue with Google */}
        <SocialLoginButton
          provider="google"
          title="Continue with Google"
          onPress={() => alert('Google login')}
        />

        {/* Divider */}
        <DividerWithText text="or" />

        {/* Already have account */}
        <View style={styles.loginLinkContainer}>
          <Text style={styles.loginText}>Already have an account?</Text>
        </View>
         <View style={styles.loginFlex}>
             <TouchableOpacity onPress={() => navigation.navigate('Login')}>
             <Text style={styles.loginButton}>Log In</Text>
          </TouchableOpacity>
          </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  loginLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  loginText: {
    color: '#666',
    fontSize: 14,
    marginRight: 5,
  },
  loginFlex: {
     flexDirection: 'row', 
     justifyContent: 'center'
  },
  loginButton: {
    color: '#0D1B2A',
    fontSize: 14,
    fontWeight: '600'
  },
});