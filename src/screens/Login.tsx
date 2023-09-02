import {Pressable, SafeAreaView, Text, View} from 'react-native';
import React, {useState} from 'react';
import useAuth from '../hooks/useAuth';
import {TheIconEyeOpened} from '../components/icons/TheIconEyeOpened';
import {TheIconEyeClosed} from '../components/icons/TheIconEyeClosed';
import {BaseTextInput} from '../components/atomics/BaseTextInput';

export function Login({navigation}: any) {
  const auth = useAuth();

  const [iSecureTextEntry, setIsSecureTextEntry] = useState(true);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  function renderIconEye() {
    return iSecureTextEntry ? <TheIconEyeClosed /> : <TheIconEyeOpened />;
  }

  const borderStylePassword = () => {
    return isPasswordFocused ? 'border border-solid border-[#212121]' : '';
  };

  const borderStyleEmail = () => {
    return isEmailFocused ? 'border border-solid border-[#212121]' : '';
  };
  return (
    <SafeAreaView className="bg-[#F5F5F5]">
      <View className="m-4">
        <Text className="text-xl text-[#03074F] my-6">Connectez-vous</Text>

        <BaseTextInput
          ref={auth.emailTextInputRef}
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
          placeholder="Email"
          onChangeText={auth.setEmail}
          value={auth.email}
          className={'w-full'}
          containerStyle={`${borderStyleEmail()}`}
        />

        <BaseTextInput
          ref={auth.passwordTextInputRef}
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
          placeholder="Password"
          handlePressIcon={() => setIsSecureTextEntry(!iSecureTextEntry)}
          renderIcon={renderIconEye}
          onChangeText={auth.setPassword}
          value={auth.password}
          secureTextEntry={iSecureTextEntry}
          className={'w-11/12 h-full'}
          containerStyle={`${borderStylePassword()}`}
        />
        <Pressable
          className="border-2 bg-[#7054FF] border-solid border-[#E9E9EE] rounded-3xl p-4"
          onPress={() => auth.handleLogin(navigation)}>
          <Text className="text-center text-[#E3E2FD]">Validez</Text>
        </Pressable>

        {auth.formSubmissionErrorMessage
          ? auth.isEmailValid &&
            auth.isPasswordValid && (
              <Text>{auth.formSubmissionErrorMessage}</Text>
            )
          : null}

        <View className="flex flex-row items-center my-10 justify-center">
          <Text className="text-[#363772] mr-2">Toujours pas de compte?</Text>
          <Pressable
            onPress={() => auth.handleRedirect('Register', navigation)}>
            <Text className="text-[#9296FE]">Inscrivez-vous</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
