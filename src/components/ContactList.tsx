import {View} from 'react-native';
import React, {ReactNode, useEffect} from 'react';
import {ContactListItem} from './ContactListItem';
import {CreatedContactResponse} from '../use-cases/createContactUseCase/type';

type Props = {
  contacts: CreatedContactResponse[];
  navigation: any;
  button: ReactNode;
};
export function ContactList({contacts, navigation, button}: Props) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => button,
    });
  }, [navigation]);
  return (
    <View>
      {contacts.map(contact => {
        return (
          <ContactListItem
            navigation={navigation}
            key={contact.id}
            contact={contact}
          />
        );
      })}
    </View>
  );
}
