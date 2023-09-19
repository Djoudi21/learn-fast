import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../screens/Login';
import {Register} from '../screens/Register';
import {useSelector} from 'react-redux';
import {Text} from 'react-native';
import {TabsStack} from './TabsStack';
import {TheBottomModal} from '../components/TheBottomModal';

const RootStack = createNativeStackNavigator();

export function RootStackRouter() {
  const [initialRoute, setInitialRoute] = useState<string | null>(null);
  const accessToken = useSelector((state: any) => state.auth.accessToken);

  useEffect(() => {
    async function checkTokensAndSetNavigation() {
      try {
        if (accessToken.accessToken !== null) {
          setInitialRoute('Tab');
        } else {
          setInitialRoute('Login');
        }
      } catch (error) {
        setInitialRoute('Login');
      }
    }

    checkTokensAndSetNavigation().then();
  }, []);

  return initialRoute !== null ? (
    <RootStack.Navigator initialRouteName={initialRoute as 'Login' | 'Tab'}>
      <RootStack.Group>
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="Tab"
          component={TabsStack}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  ) : (
    <Text>Loading</Text>
  );
}
