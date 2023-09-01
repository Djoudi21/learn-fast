import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {CreatedContactResponse} from '../use-cases/createContactUseCase/type';

type Props = {
  contact: CreatedContactResponse;
  navigation: any;
};
export function ContactListItem({contact, navigation}: Props) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Contacts', {
          screen: 'ContactDetails',
        });
      }}>
      <View className="w-full h-20 border border-solid p-4 flex items-center justify-center">
        <Text>{contact.name}</Text>
      </View>
    </TouchableOpacity>
  );
}
