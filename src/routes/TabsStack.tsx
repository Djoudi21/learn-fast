import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Settings} from '../screens/Settings';
import React from 'react';
import {Contacts} from '../screens/Contacts';
import {Conversations} from '../screens/Conversations';

export function TabsStack() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="Conversations" component={Conversations} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
