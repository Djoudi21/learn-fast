import {
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {listMessagesByConversationId} from '../store/messages/listMessagesByConversationId';
import {MessageListItem} from '../components/MessageListItem';
import {Message} from '../use-cases/listMessagesUseCase/types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {createMessage} from '../store/messages/createMessage';
import {CreateMessageReqBody} from '../use-cases/createMessageUseCase/types';
import Pusher from 'pusher-js';

export function Conversation({route}) {
  const [userInput, setUserInput] = useState('');
  const {conversationId} = route.params;
  const messagesFromStore = useSelector(
    (state: any) => state.messages.messages,
  );
  const [messagesAfterAddingPusher, setMessagesAfterAddingPusher] =
    useState(messagesFromStore);
  const userId = useSelector((state: any) => state.auth.entity.id);
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const pusher = new Pusher('7e86efefa721402f7275', {
    cluster: 'eu',
  });

  useEffect(() => {
    dispatch(listMessagesByConversationId(conversationId));
  }, [conversationId]);

  useEffect(() => {
    const channel = pusher.subscribe('my-channel');
    channel.bind('my-event', (data: any) => {
      setMessagesAfterAddingPusher([...messagesFromStore, data.message]);
    });
  }, []);

  const renderItem = (message: Message) => {
    return <MessageListItem message={message} />;
  };
  const submit = () => {
    const payload: CreateMessageReqBody = {
      conversationId,
      userInput,
      userId,
    };
    setUserInput('');
    dispatch(createMessage(payload));
  };
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
      className={'bg-[#FDFDFD] h-full'}>
      <FlatList
        className={'w-full'}
        data={messagesAfterAddingPusher}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => item.id}
      />
      <View className={'flex flex-row items-center gap-2'}>
        <Text>Icon</Text>
        <TextInput
          placeholder="Saissez votre message"
          onChangeText={setUserInput}
          value={userInput}
          className={
            'w-4/6 h-full border border-solid border-midnightBlue p-2 rounded-3xl'
          }
        />
        <Pressable onPress={submit}>
          <Text>Icon</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
