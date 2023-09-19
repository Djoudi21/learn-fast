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
    <View className="w-full h-20 px-4 flex flex-row items-center">
      <Text className={'mr-10 pb-4'}>avatar</Text>
      <View
        className={
          'flex flex-col gap-4 border-b border-b-whitesmoke border-b-solid w-full pb-4 pt-2'
        }>
        <Text className={'font-bold'}>{conversationTitle}</Text>
        <Text className={'font-light'}>dernier message</Text>
      </View>
    </View>
  );
}
