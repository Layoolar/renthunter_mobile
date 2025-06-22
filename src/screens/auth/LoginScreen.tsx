import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import InputField from '../../components/reuseables/InputField';
import CustomButton from '../../components/reuseables/CustomButton';
import DividerWithText from '../../components/reuseables/DividerWithText';
import SocialLoginButton from '../../components/reuseables/SocialLoginButton';

export default function LoginScreen() {
  const router = useRouter();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert('Logging in...');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Log In</Text>

        <InputField
          label="Email"
          placeholder="example@email.com"
          value={email}
          onChangeText={setEmail}
        />

        <InputField
          label="Password"
          placeholder="••••••••"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <View style={styles.forgetView}>
             <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
             </TouchableOpacity>
        </View>

        <CustomButton title="Sign In" onPress={handleLogin} />

        <SocialLoginButton
          provider="google"
          title="Continue with Google"
          onPress={() => alert('Google login')}
        />
        <DividerWithText text="or" />

        <View style={styles.signupLinkContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>
        </View>
       <View style={styles.signUpFlex}>
          <TouchableOpacity  onPress={() => navigation.navigate('Signup')}>
               <Text style={styles.signupButton}>Sign Up</Text>
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
  forgetView: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  forgotPasswordText: {
    color: '#0D1B2A',
    fontWeight: '500',
    fontSize: 15,
    marginBottom: 10,
    textDecorationLine: 'underline'
  },
  signupLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  signupText: {
    color: '#666',
    fontSize: 14,
    marginRight: 5,
  },
  signUpFlex: {
    flexDirection: 'row', 
    justifyContent: 'center'
  },
  signupButton: {
    color: '#0D1B2A',
    fontSize: 14,
    fontWeight: '600',
  },
});