import {SafeAreaView, Text} from 'react-native';
import React, {useState} from 'react';
import {ContactList} from '../components/ContactList';

export function Contacts() {
  const [contacts] = useState([
    {
      id: 1,
      name: 'Fabienne',
    },
    {
      id: 2,
      name: 'Fay',
    },
  ]);
  return (
    <SafeAreaView>
      <ContactList contacts={contacts} />
    </SafeAreaView>
  );
}
