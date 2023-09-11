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

  const renderItem = (item: {id: React.Key | null | undefined}) => {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => {
          navigation.navigate('Conversations', {
            screen: 'ConversationDetails',
          });
        }}>
        <ConversationListItem conversation={item} />
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
