import {View} from 'react-native';
import React from 'react';
import {ContactListItem} from './ContactListItem';
import {CreatedContactResponse} from '../use-cases/createContactUseCase/type';

type Props = {
  contacts: CreatedContactResponse[];
};
export function ContactList({contacts}: Props) {
  return (
    <View>
      {contacts.map(contact => {
        return <ContactListItem contact={contact} />;
      })}
    </View>
  );
}
