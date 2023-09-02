import {Pressable, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import useAuth from '../hooks/useAuth';
import {TheIconEyeOpened} from '../components/icons/TheIconEyeOpened';
import {TheIconEyeClosed} from '../components/icons/TheIconEyeClosed';
import {BaseTextInput} from '../components/atomics/BaseTextInput';

export function Register({navigation}: any) {
  const auth = useAuth();

  function renderIconEye() {
    return auth.iSecureTextEntry ? <TheIconEyeClosed /> : <TheIconEyeOpened />;
  }

  const borderStylePassword = () => {
    return auth.isPasswordFocused
      ? 'border-2 border-solid border-[#212121]'
      : '';
  };

  const borderStyleEmail = () => {
    return auth.isEmailFocused ? 'border-2 border-solid border-[#212121]' : '';
  };
  return (
    <SafeAreaView className="bg-[#F5F5F5]">
      <View className="m-4">
        <Text className="text-xl text-[#03074F] my-6">Inscrivez-vous</Text>

        <BaseTextInput
          ref={auth.emailTextInputRef}
          onFocus={() => auth.setIsEmailFocused(true)}
          onBlur={() => auth.setIsEmailFocused(false)}
          placeholder="Email"
          onChangeText={auth.setEmail}
          value={auth.email}
          className={'w-full'}
          containerStyle={`${borderStyleEmail()}`}
        />

        <BaseTextInput
          ref={auth.passwordTextInputRef}
          onFocus={() => auth.setIsPasswordFocused(true)}
          onBlur={() => auth.setIsPasswordFocused(false)}
          placeholder="Password"
          handlePressIcon={() =>
            auth.setIsSecureTextEntry(!auth.iSecureTextEntry)
          }
          renderIcon={renderIconEye}
          onChangeText={auth.setPassword}
          value={auth.password}
          secureTextEntry={auth.iSecureTextEntry}
          className={'w-11/12 h-full'}
          containerStyle={`${borderStylePassword()}`}
        />

        <Pressable
          className="border-2 bg-[#7054FF] border-solid border-[#E9E9EE] rounded-3xl p-4"
          onPress={() => auth.handleRegister(navigation)}>
          <Text className="text-center text-[#E3E2FD]">Validez</Text>
        </Pressable>

        {auth.formSubmissionErrorMessage
          ? auth.isEmailValid &&
            auth.isPasswordValid && (
              <Text>{auth.formSubmissionErrorMessage}</Text>
            )
          : null}

        <View className="flex flex-row items-center my-10 justify-center">
          <Text className="text-[#363772] mr-2">Déja un compte?</Text>
          <Pressable onPress={() => auth.handleRedirect('Login', navigation)}>
            <Text className="text-[#9296FE]">Connectez-vous</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
