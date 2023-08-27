import {Text, View} from 'react-native';
import React from 'react';

type Props = {
  conversation: any;
};
export function ConversationListItem({conversation}: Props) {
  return (
    <View className="w-full h-20 border border-solid p-4 flex items-center justify-center">
      <Text>{conversation.title}</Text>
    </View>
  );
}
