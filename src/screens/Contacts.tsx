import {Pressable, SafeAreaView, Text} from 'react-native';
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
          <Pressable
            onPress={() => {
              navigation.navigate('ContactStackNavigator', {
                screen: 'AddContact',
              });
            }}>
            <Text>Add</Text>
          </Pressable>
        }
      />
    </SafeAreaView>
  );
}
