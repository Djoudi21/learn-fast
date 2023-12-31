import type {NativeStackScreenProps} from '@react-navigation/native-stack';
type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
};
export type LoginNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'Login'
>;

export type RegisterNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'Register'
>;

export type CreatedUser = {
  id: string;
  email: string;
  password: string;
};

export type User = {
  id: string | number;
  email: string;
};
