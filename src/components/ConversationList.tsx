import {Pressable, Text, View} from 'react-native';
import React, {ReactNode, useEffect} from 'react';

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
  }, [navigation]);
  return (
    <View>
      {conversations.map((conversation: any) => {
        return (
          <Pressable
            key={conversation.id}
            onPress={() => {
              navigation.navigate('ConversationStackNavigator', {
                screen: 'ConversationDetails',
              });
            }}>
            <Text>{conversation.title}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
