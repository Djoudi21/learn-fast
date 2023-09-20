import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Settings} from '../screens/Settings';
import React from 'react';
import {Conversations} from '../screens/Conversations';
import {Contacts} from '../screens/Contacts';

export function TabsStack() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Conversations"
        component={Conversations}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
