import {View} from 'react-native';
import React, {ReactNode, useEffect} from 'react';
import {ContactListItem} from './ContactListItem';
import {CreatedContactResponse} from '../use-cases/createContactUseCase/type';

type Props = {
  contacts: CreatedContactResponse[];
  navigation: any;
  button: ReactNode;
  logoTitle: ReactNode;
};
export function ContactList({contacts, navigation, button, logoTitle}: Props) {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => logoTitle,
      headerRight: () => [button],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
