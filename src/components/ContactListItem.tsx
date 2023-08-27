import {Pressable, Text, View} from 'react-native';
import React from 'react';
import {CreatedContactResponse} from '../use-cases/createContactUseCase/type';

type Props = {
  contact: CreatedContactResponse;
  navigation: any;
};
export function ContactListItem({contact, navigation}: Props) {
  return (
    <View className="w-full h-20 border border-solid p-4 flex items-center justify-center">
      <Pressable
        key={contact.id}
        onPress={() => {
          navigation.navigate('ContactStackNavigator', {
            screen: 'ContactDetails',
          });
        }}>
        <Text>{contact.name}</Text>
      </Pressable>
    </View>
  );
}
