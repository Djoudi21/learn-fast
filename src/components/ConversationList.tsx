import {TouchableOpacity, View} from 'react-native';
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
  return (
    <View>
      {conversations.map((conversation: any) => {
        return (
          <TouchableOpacity
            key={conversation.id}
            onPress={() => {
              navigation.navigate('Conversations', {
                screen: 'ConversationDetails',
              });
            }}>
            <ConversationListItem conversation={conversation} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
