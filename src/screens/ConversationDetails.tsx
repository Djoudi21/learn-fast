import {FlatList, SafeAreaView, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {listMessagesByConversationId} from '../store/messages/listMessagesByConversationId';
import {MessageListItem} from '../components/MessageListItem';
import {Message} from '../use-cases/listMessagesUseCase/types';
import {BaseTextInput} from '../components/atomics/BaseTextInput';

export function ConversationDetails({route}) {
  const [userInput, setUserInput] = useState('');
  const {conversationId} = route.params;
  const messages = useSelector((state: any) => state.messages.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listMessagesByConversationId(conversationId));
  }, [messages]);

  const renderItem = (message: Message) => {
    return <MessageListItem message={message} />;
  };
  return (
    <SafeAreaView className={'bg-[#FDFDFD]'}>
      <FlatList
        className={'border border-solid border-error'}
        data={messages}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => item.id}
      />
      <BaseTextInput
        // onFocus={}
        // onBlur={}
        placeholder="Saissez votre message"
        // handlePressIcon={() =>
        //   auth.setIsSecureTextEntry(!auth.iSecureTextEntry)
        // }
        // renderIcon={renderIconEye}
        onChangeText={setUserInput}
        value={userInput}
        // secureTextEntry={auth.iSecureTextEntry}
        className={'w-11/12 h-full'}
        // errorMessage={auth.passwordErrorMessage}
        containerStyle={'border border-error border-solid h-10'}
      />
    </SafeAreaView>
  );
}
