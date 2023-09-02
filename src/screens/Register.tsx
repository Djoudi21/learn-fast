import {Pressable, SafeAreaView, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import useAuth from '../hooks/useAuth';
import {TheIconEyeOpened} from '../components/icons/TheIconEyeOpened';
import {TheIconEyeClosed} from '../components/icons/TheIconEyeClosed';

export function Register({navigation}: any) {
  const auth = useAuth();

  const [iSecureTextEntry, setIsSecureTextEntry] = useState(true);
  function renderIconEye() {
    return iSecureTextEntry ? <TheIconEyeClosed /> : <TheIconEyeOpened />;
  }
  return (
    <SafeAreaView className="bg-[#F5F5F5]">
      <View className="m-4">
        <Text className="text-xl text-[#03074F] my-6">Inscrivez-vous</Text>
        <View className="mb-10">
          <TextInput
            ref={auth.emailTextInputRef}
            placeholder="Email"
            onChangeText={auth.setEmail}
            value={auth.email}
            className="border-2 border-solid border-[#E9E9EE] rounded-3xl p-4"
          />
          {!auth.isEmailValid && (
            <View>
              <Text>{auth.emailErrorMessage}</Text>
            </View>
          )}
        </View>
        <View className="mb-10">
          <View className="border-2 border-solid border-[#E9E9EE] rounded-3xl p-4 flex flex-row">
            <TextInput
              ref={auth.passwordTextInputRef}
              // onBlur={() => auth.passwordValidation()}
              placeholder="Password"
              onFocus={auth.handleFocusPasswordInput}
              onChangeText={auth.setPassword}
              value={auth.password}
              secureTextEntry={iSecureTextEntry}
              className="w-11/12"
            />
            <Pressable onPress={() => setIsSecureTextEntry(!iSecureTextEntry)}>
              {renderIconEye()}
            </Pressable>
          </View>

          {!auth.isPasswordValid && (
            <View>
              <Text>{auth.passwordErrorMessage}</Text>
            </View>
          )}
        </View>

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
