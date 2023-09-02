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
    return auth.isPasswordFocused ? 'border border-solid border-primary' : '';
  };

  const borderStyleEmail = () => {
    return auth.isEmailFocused ? 'border- border-solid border-primary' : '';
  };

  return (
    <SafeAreaView className="bg-Whitesmoke">
      <View className="m-4">
        <Text className="text-xl text-midnightBlue my-6">Inscrivez-vous</Text>

        <BaseTextInput
          ref={auth.emailTextInputRef}
          onFocus={() => auth.setIsEmailFocused(true)}
          onBlur={() => auth.setIsEmailFocused(false)}
          placeholder="Email"
          onChangeText={auth.setEmail}
          value={auth.email}
          className={'w-full'}
          errorMessage={auth.emailErrorMessage}
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
          errorMessage={auth.passwordErrorMessage}
          containerStyle={`${borderStylePassword()}`}
        />

        <Pressable
          className="border-2 bg-purple border-solid border-lavender rounded-3xl p-4"
          onPress={() => auth.handleRegister(navigation)}>
          <Text className="text-center text-hanPurple">Validez</Text>
        </Pressable>

        {auth.formSubmissionErrorMessage.length
          ? auth.isEmailValid &&
            auth.isPasswordValid && (
              <Text className={'text-error ml-2 mt-2 mb-4'}>
                {auth.formSubmissionErrorMessage}
              </Text>
            )
          : null}
        <View className="flex flex-row items-center my-10 justify-center">
          <Text className="text-mediumSlateBlue mr-2">Déja un compte?</Text>
          <Pressable onPress={() => auth.handleRedirect('Login', navigation)}>
            <Text className="text-lightSlateBlue">Connectez-vous</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
