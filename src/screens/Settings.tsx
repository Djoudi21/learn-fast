import {Pressable, SafeAreaView, Text} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {toto} from '../../src/store/auth/authSlice';

export function Settings() {
  const dispatch = useDispatch();
  const tutu = () => {
    dispatch(toto());
  };
  return (
    <SafeAreaView>
      <Pressable onPress={tutu}>
        <Text>LOG OUT</Text>
      </Pressable>
    </SafeAreaView>
  );
}
