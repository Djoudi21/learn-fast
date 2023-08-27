import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Settings} from '../screens/Settings';
import React from 'react';
import {ContactStackNavigator} from './ContactStack';
import {ConversationStackNavigator} from './ConversationStack';

export function TabsStack() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ContactStackNavigator"
        component={ContactStackNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ConversationStackNavigator"
        component={ConversationStackNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
