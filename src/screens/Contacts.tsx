import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {ContactList} from '../components/ContactList';
import {CreatedContactResponse} from '../use-cases/createContactUseCase/type';

type Props = {
  navigation: any;
};
export function Contacts({navigation}: Props) {
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
      <ContactList
        contacts={contacts}
        navigation={navigation}
        button={
          <TouchableOpacity
            key={'tutu'}
            onPress={() => {
              navigation.navigate('Contacts', {
                screen: 'AddContact',
              });
            }}>
            <Text className="ml-4">Add</Text>
          </TouchableOpacity>
        }
        logoTitle={<Text>TITLE</Text>}
      />
    </SafeAreaView>
  );
}
