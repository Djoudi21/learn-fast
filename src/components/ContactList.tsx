import {View} from 'react-native';
import React from 'react';
import {ContactListItem} from './ContactListItem';

export function ContactList({contacts}) {
  return (
    <View>
      {contacts.map(contact => {
        return <ContactListItem contact={contact} />;
      })}
    </View>
  );
}
