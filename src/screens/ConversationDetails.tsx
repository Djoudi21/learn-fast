import {FlatList, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {listMessagesByConversationId} from '../store/messages/listMessagesByConversationId';
import {MessageListItem} from '../components/MessageListItem';
import {Message} from '../use-cases/listMessagesUseCase/types';

export function ConversationDetails({route}) {
  const {conversationId} = route.params;
  const messages = useSelector((state: any) => state.messages.messages);
  console.log(messages);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listMessagesByConversationId(conversationId));
  }, []);

  const renderItem = (message: Message) => {
    return <MessageListItem message={message} />;
  };
  return (
    <SafeAreaView className={'bg-[#FDFDFD] h-screen'}>
      <FlatList
        data={messages}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
