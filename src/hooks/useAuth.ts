import {useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {register} from '../store/auth/register';
import {store} from '../store';
import {login} from '../store/auth/login';
import {ThunkDispatch} from '@reduxjs/toolkit';

export default function useAuth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [formSubmissionErrorMessage, setFormSubmissionErrorMessage] =
    useState('');
  const [iSecureTextEntry, setIsSecureTextEntry] = useState(true);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const emailTextInputRef = useRef(null);
  const passwordTextInputRef = useRef(null);

  async function handleLogin(navigation: any) {
    const isEmailValid = emailValidation();
    const isPasswordValid = passwordValidation();
    if (!isEmailValid || !isPasswordValid) {
      return;
    }
    const user = {
      email,
      password,
    };

    try {
      await dispatch(login(user)).unwrap();
      const accessToken = store.getState().auth.entity.accessToken;

      return accessToken
        ? navigation.push('Tab')
        : setFormSubmissionErrorMessage("Aucun utilisateur n'a été trouvé");
    } catch (e) {
      // const errorMessage = setFormSubmissionErrorMessage(e.response.data.message);
      // setFormSubmissionErrorMessage(errorMessage);
    }
  }

  async function handleRegister(navigation: any) {
    const isEmailValid = emailValidation();
    const isPasswordValid = passwordValidation();

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    const user = {
      email,
      password,
    };
    try {
      const res = await dispatch(register(user)).unwrap();
      if (res?.status === 201) {
        navigation.push('Tab');
      }
    } catch (e) {
      // const errorMessage = setFormSubmissionErrorMessage(e.response.message);
      // setFormSubmissionErrorMessage(errorMessage);
    }
  }

  function emailValidation() {
    if (email.length === 0) {
      setEmailErrorMessage('Please enter an email');
      return false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailErrorMessage('Email is not valid');
      return false;
    } else {
      setEmailErrorMessage('');
      return true;
    }
  }

  function passwordValidation() {
    if (password.length === 0) {
      setPasswordErrorMessage('Please enter a paswword');
      return false;
    } else {
      setPasswordErrorMessage('');
      return true;
    }
  }

  function handleRedirect(routeName: string, navigation: any) {
    navigation.push(routeName);
  }

  function handleFocusEmailInput() {
    setIsEmailFocused(true);
    setFormSubmissionErrorMessage('');
  }

  function handleFocusPasswordInput() {
    setIsPasswordFocused(true);
    setFormSubmissionErrorMessage('');
  }

  return {
    handleLogin,
    handleRegister,
    handleRedirect,
    handleFocusPasswordInput,
    handleFocusEmailInput,
    emailErrorMessage,
    setEmailErrorMessage,
    passwordErrorMessage,
    setPasswordErrorMessage,
    emailTextInputRef,
    passwordTextInputRef,
    email,
    setEmail,
    password,
    setPassword,
    iSecureTextEntry,
    setIsSecureTextEntry,
    isPasswordFocused,
    setIsPasswordFocused,
    isEmailFocused,
    setIsEmailFocused,
    formSubmissionErrorMessage,
  };
}
