import {Pressable, Text, TextInput, View} from 'react-native';
import React, {Dispatch, forwardRef, ReactNode, SetStateAction} from 'react';

type Props = {
  renderIcon?: () => ReactNode;
  errorMessage?: string;
  isInputValid?: boolean;
  handlePressIcon?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
  onChangeText?: Dispatch<SetStateAction<string>>;
  value?: string;
  secureTextEntry?: boolean;
  className?: string;
  containerStyle?: string;
};
export const BaseTextInput = forwardRef<TextInput, Props>(
  (props: Props, ref) => {
    const {
      renderIcon,
      handlePressIcon,
      isInputValid,
      errorMessage,
      containerStyle,
      ...rest
    } = props;

    return (
      <View>
        <View
          className={`border-2 border-solid border-lavender rounded-3xl px-4 h-10 flex items-center justify-center flex-row ${containerStyle}`}>
          <TextInput ref={ref} {...rest} />
          <Pressable onPress={handlePressIcon}>{renderIcon?.()}</Pressable>
        </View>
        {!isInputValid && (
          <View>
            <Text className={'text-error ml-2 mt-2 mb-4'}>{errorMessage}</Text>
          </View>
        )}
      </View>
    );
  },
);
