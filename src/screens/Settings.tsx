import {Pressable, SafeAreaView, Text} from 'react-native';
import React from 'react';
export function Settings({navigation}: any) {
  return (
    <SafeAreaView>
      <Pressable
        onPress={async () => {
          navigation.push('Login');
        }}>
        <Text>LOG OUT</Text>
      </Pressable>
    </SafeAreaView>
  );
}
