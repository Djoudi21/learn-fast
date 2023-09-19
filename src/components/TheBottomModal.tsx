import {Modal, View} from 'react-native';
import React, {ReactNode} from 'react';

type Props = {
  visible: boolean;
  handleDismiss: () => void;
  children: ReactNode;
};
export function TheBottomModal({visible, handleDismiss, children}: Props) {
  return (
    <Modal
      animated
      animationType="fade"
      visible={visible}
      transparent
      onRequestClose={handleDismiss}>
      <View className={'bg-[rgba(0,0,0,0.2)] justify-end flex'}>
        {children}
      </View>
    </Modal>
  );
}
