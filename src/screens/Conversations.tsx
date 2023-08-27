import {Pressable, SafeAreaView, Text} from 'react-native';
import React, {useState} from 'react';
import {CreatedContactResponse} from '../use-cases/createContactUseCase/type';
import {ConversationList} from '../components/ConversationList';

type Props = {
  navigation: any;
};
export function Conversations({navigation}: Props) {
  const [conversations] = useState([
    {
      id: 1,
      title: 'Conv1',
    },
    {
      id: 2,
      title: 'Conv2',
    },
  ]);
  return (
    <SafeAreaView>
      <ConversationList
        conversations={conversations}
        navigation={navigation}
        button={
          <Pressable
            onPress={() => {
              navigation.navigate('ConversationStackNavigator', {
                screen: 'AddConversation',
              });
            }}>
            <Text>Add</Text>
          </Pressable>
        }
      />
    </SafeAreaView>
  );
}
