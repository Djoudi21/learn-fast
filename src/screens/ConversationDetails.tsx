import {FlatList, SafeAreaView, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {listMessagesByConversationId} from '../store/messages/listMessagesByConversationId';
import {MessageListItem} from '../components/MessageListItem';
import {Message} from '../use-cases/listMessagesUseCase/types';
import {BaseTextInput} from '../components/atomics/BaseTextInput';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export function ConversationDetails({route}) {
  const [userInput, setUserInput] = useState('');
  const {conversationId} = route.params;
  const messages = useSelector((state: any) => state.messages.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listMessagesByConversationId(conversationId));
  }, [conversationId]);

  const renderItem = (message: Message) => {
    return <MessageListItem message={message} />;
  };
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',

        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
      className={'bg-[#FDFDFD h-full'}>
      <FlatList
        className={'w-full'}
        data={messages}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => item.id}
      />
      <BaseTextInput
        placeholder="Saissez votre message"
        onChangeText={setUserInput}
        value={userInput}
        className={'w-11/12 h-full'}
        containerStyle={'h-10'}
      />
    </SafeAreaView>
  );
}
