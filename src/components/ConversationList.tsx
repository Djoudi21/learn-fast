import {FlatList, TouchableOpacity, View} from 'react-native';
import React, {ReactNode, useEffect} from 'react';
import {ConversationListItem} from './ConversationListItem';

type Props = {
  conversations: any;
  navigation: any;
  button: ReactNode;
};
export function ConversationList({conversations, navigation, button}: Props) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => button,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  const renderItem = (conversation: any) => {
    return (
      <TouchableOpacity
        key={conversation.id}
        onPress={() => {
          navigation.navigate('ConversationDetails', {
            conversationId: conversation.id,
          });
        }}>
        <ConversationListItem conversation={conversation} />
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={conversations}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
