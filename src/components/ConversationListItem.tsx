import {Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {Conversation} from '../use-cases/listConversationsUseCase/types';
import {RootState} from '../store';

type Props = {
  conversation: Conversation;
};
export function ConversationListItem({conversation}: Props) {
  const userId = useSelector((state: RootState) => state.auth.entity.id);
  const contact = conversation.participants.filter(el => el.id !== userId);
  const conversationTitle = contact[0].email;

  return (
    <View className="w-full h-20 border border-solid p-4 flex items-center justify-center">
      <Text>{conversationTitle}</Text>
    </View>
  );
}
