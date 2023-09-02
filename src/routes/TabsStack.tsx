import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Settings} from '../screens/Settings';
import React from 'react';
import {ContactStackNavigator} from './ContactStack';
import {ConversationStackNavigator} from './ConversationStack';
import {TheIconSettings} from '../components/icons/TheIconSettings';

export function TabsStack() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          if (route.name === 'Contacts') {
            return <TheIconSettings />;
          }
        },
      })}>
      <Tab.Screen
        name="Contacts"
        component={ContactStackNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Conversations"
        component={ConversationStackNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
