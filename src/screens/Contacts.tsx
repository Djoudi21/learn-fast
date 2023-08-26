import {SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {ContactList} from '../components/ContactList';
import {CreatedContactResponse} from '../use-cases/createContactUseCase/type';

export function Contacts() {
  const [contacts] = useState<CreatedContactResponse[]>([
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
