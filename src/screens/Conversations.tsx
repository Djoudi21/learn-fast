import {Pressable, SafeAreaView, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ConversationList} from '../components/ConversationList';
import {useDispatch, useSelector} from 'react-redux';
import {listConversationsByUserId} from '../store/conversations/listConversationsByUserId';

type Props = {
  navigation: any;
};
export function Conversations({navigation}: Props) {
  const conversations = useSelector(state => state.conversations.conversations);
  // console.log('TOTO', conversations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listConversationsByUserId(1));
  }, []);
  return (
    <SafeAreaView>
      <ConversationList
        conversations={conversations}
        navigation={navigation}
        button={
          <Pressable
            onPress={() => {
              navigation.navigate('Conversations', {
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
