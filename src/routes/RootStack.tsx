import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../screens/Login';
import {Register} from '../screens/Register';
import {useSelector} from 'react-redux';
// import {Text} from 'react-native';
import {TabsStack} from './TabsStack';
// import {TheBottomModal} from '../components/TheBottomModal';
import {Help} from '../components/Help';
import {Conversations} from '../screens/Conversations';
import {Conversation} from '../screens/Conversation';
// import {TheBottomModal} from '../components/TheBottomModal';

const RootStack = createNativeStackNavigator();

export function RootStackRouter() {
  // const [initialRoute, setInitialRoute] = useState<string | null>(null);
  // const accessToken = useSelector((state: any) => state.auth.accessToken);
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  // useEffect(() => {
  //   async function checkTokensAndSetNavigation() {
  //     try {
  //       if (accessToken.accessToken !== null) {
  //         setInitialRoute('Tab');
  //       } else {
  //         setInitialRoute('Login');
  //       }
  //     } catch (error) {
  //       setInitialRoute('Login');
  //     }
  //   }
  //
  //   checkTokensAndSetNavigation().then();
  // }, []);

  return (
    <RootStack.Navigator>
      {isLoggedIn ? (
        // Screens for logged in users
        <RootStack.Group>
          <RootStack.Screen
            name="Tab"
            component={TabsStack}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen name="Conversation" component={Conversation} />
        </RootStack.Group>
      ) : (
        // Auth screens
        <RootStack.Group screenOptions={{headerShown: false}}>
          <RootStack.Screen name="Login" component={Login} />
          <RootStack.Screen name="Register" component={Register} />
        </RootStack.Group>
      )}
      {/* Common modal screens */}
      <RootStack.Group screenOptions={{presentation: 'modal'}}>
        <RootStack.Screen name="Help" component={Help} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}
