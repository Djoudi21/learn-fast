import {useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {register} from '../store/auth/register';
import {store} from '../store';
import {login} from '../store/auth/login';
import {ThunkDispatch} from '@reduxjs/toolkit';

export default function useAuth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
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
    emailValidation();
    passwordValidation();

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    const user = {
      email,
      password,
    };

    try {
      dispatch(login(user));
      const accessToken = store.getState().auth.tokens.accessToken;
      return accessToken?.length
        ? navigation.push('Tab')
        : setFormSubmissionErrorMessage("Aucun utilisateur n'a été trouvé");
    } catch (e) {
      // @ts-ignore
      const errorMessage = setSubmissionErrorMessage(e.response.data.message);
      setFormSubmissionErrorMessage(errorMessage);
    }
  }

  async function handleRegister(navigation: any) {
    emailValidation();
    passwordValidation();
    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    const user = {
      email,
      password,
    };
    try {
      dispatch(register(user));
      dispatch(login(user));
      navigation.push('Tab');
    } catch (e) {
      // @ts-ignore
      const errorMessage = setSubmissionErrorMessage(e.response.data.message);
      setFormSubmissionErrorMessage(errorMessage);
    }
  }

  function emailValidation() {
    if (!email.length) {
      setIsEmailValid(false);
      setEmailErrorMessage('Please enter an email');
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setIsEmailValid(false);
      setEmailErrorMessage('Email is not valid');
    } else {
      setEmailErrorMessage('');
      setIsEmailValid(true);
    }
  }

  function passwordValidation() {
    if (!password.length) {
      setIsPasswordValid(false);
      setPasswordErrorMessage('Please enter a paswword');
    } else {
      setPasswordErrorMessage('');
      setIsPasswordValid(true);
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
    // emailValidation,
    // passwordValidation,
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
    isEmailValid,
    setIsEmailValid,
    isPasswordValid,
    setIsPasswordValid,
    iSecureTextEntry,
    setIsSecureTextEntry,
    isPasswordFocused,
    setIsPasswordFocused,
    isEmailFocused,
    setIsEmailFocused,
    formSubmissionErrorMessage,
  };
}
