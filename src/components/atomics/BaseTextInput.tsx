import {Pressable, Text, TextInput, View} from 'react-native';
import React, {
  Dispatch,
  MutableRefObject,
  ReactNode,
  SetStateAction,
} from 'react';

type Props = {
  renderIcon?: () => ReactNode;
  errorMessage?: string;
  isInputValid?: boolean;
  handlePressIcon?: () => void;
  ref?: MutableRefObject<null>;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
  onChangeText?: Dispatch<SetStateAction<string>>;
  value?: string;
  secureTextEntry?: boolean;
  className?: string;
  containerStyle?: string;
};
export function BaseTextInput(props: Props) {
  const {
    renderIcon,
    handlePressIcon,
    isInputValid,
    errorMessage = '',
    containerStyle,
    ...rest
  } = props;
  return (
    <View>
      <View
        className={`border-2 border-solid border-[#E9E9EE] rounded-3xl px-4 h-10 flex items-center justify-center flex-row ${containerStyle}`}>
        <TextInput {...rest} />
        <Pressable onPress={handlePressIcon}>{renderIcon?.()}</Pressable>
      </View>
      {!isInputValid && (
        <View>
          <Text>{errorMessage}</Text>
        </View>
      )}
    </View>
  );
}
