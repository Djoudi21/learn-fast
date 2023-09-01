import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Conversations} from '../screens/Conversations';
import {ConversationDetails} from '../screens/ConversationDetails';
import {AddConversation} from '../screens/AddConversation';

const ConversationStack = createNativeStackNavigator();

export function ConversationStackNavigator() {
  return (
    <ConversationStack.Navigator>
      <ConversationStack.Group>
        <ConversationStack.Screen
          name="ConversationsScreen"
          component={Conversations}
        />
        <ConversationStack.Screen
          name="ConversationDetails"
          component={ConversationDetails}
        />
        <ConversationStack.Screen
          name="AddConversation"
          component={AddConversation}
        />
      </ConversationStack.Group>
    </ConversationStack.Navigator>
  );
}
