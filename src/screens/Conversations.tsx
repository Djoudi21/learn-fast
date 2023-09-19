import {Pressable, SafeAreaView, Text} from 'react-native';
import React, {useEffect} from 'react';
import {ConversationList} from '../components/ConversationList';
import {useDispatch, useSelector} from 'react-redux';
import {listConversationsByUserId} from '../store/conversations/listConversationsByUserId';
import {RootState} from '../store';

type Props = {
  navigation: any;
};
export function Conversations({navigation}: Props) {
  const conversations = useSelector(
    (state: RootState) => state.conversations.conversations,
  );
  const userId = useSelector((state: RootState) => state.auth.entity.id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listConversationsByUserId(userId));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
