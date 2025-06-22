import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
};

export type LoginScreenProps = {
  navigation: NativeStackNavigationProp<AuthStackParamList, 'Login'>;
};

export type SignupScreenProps = {
  navigation: NativeStackNavigationProp<AuthStackParamList, 'Signup'>;
};