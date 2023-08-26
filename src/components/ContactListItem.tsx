import {Text, View} from 'react-native';
import React from 'react';
import {CreatedContactResponse} from '../use-cases/createContactUseCase/type';

type Props = {
  contact: CreatedContactResponse;
};
export function ContactListItem({contact}: Props) {
  return (
    <View className="w-full h-20 border border-solid p-4 flex items-center justify-center">
      <Text className="" key={contact.id}>
        {contact.name}
      </Text>
    </View>
  );
}
