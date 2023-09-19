import {Text, View} from 'react-native';
import React from 'react';
import {Message} from '../use-cases/listMessagesUseCase/types';
import {useSelector} from 'react-redux';

type Props = {
  message: Message;
};
export function MessageListItem({message}: Props) {
  const currentUserId = useSelector((state: any) => state.auth.entity.id);
  console.log('user', message);
  const setUserStyle = () => {
    return message.userId === currentUserId
      ? 'self-end bg-lavender'
      : 'bg-hanPurple';
  };
  return (
    <View className={`w-3/4 flex p-4 m-4 rounded ${setUserStyle()}`}>
      <Text className={''}>{message.text}</Text>
    </View>
  );
}
