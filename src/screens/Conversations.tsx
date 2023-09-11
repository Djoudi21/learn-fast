import {Pressable, SafeAreaView, Text} from 'react-native';
import React, {useEffect} from 'react';
import {ConversationList} from '../components/ConversationList';
import {useDispatch, useSelector} from 'react-redux';
import {listConversationsByUserId} from '../store/conversations/listConversationsByUserId';

type Props = {
  navigation: any;
};
export function Conversations({navigation}: Props) {
  const conversations = useSelector(state => state.conversations.conversations);
  const userId = useSelector(state => state.auth.entity.id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listConversationsByUserId(userId));
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
