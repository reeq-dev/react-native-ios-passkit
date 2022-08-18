import React from 'react';
import {
  Platform,
  requireNativeComponent,
  NativeModules,
  ViewProps,
} from 'react-native';

const isAndroid: boolean = Platform.OS === 'android';
interface AddPassButtonNativeProps extends ViewProps {
  onAddButtonPress?: () => void;
  variant?: 'black-outline' | 'black';
}
interface AddPassButtonProps extends ViewProps {
  onPress?: () => void;
  variant?: 'black-outline' | 'black';
}

const AddPassButtonNative =
  requireNativeComponent<AddPassButtonNativeProps>('AddPassButton');

export const AddPassButton: React.FC<AddPassButtonProps> = ({
  onPress = () => {},
  variant = 'black-outline',
  ...props
}) => {
  if (isAndroid) return null;

  return (
    <AddPassButtonNative
      {...props}
      onAddButtonPress={onPress}
      variant={variant}
    />
  );
};

const { AddPassModule } = NativeModules;

export const canAddPasses = (): Promise<boolean> => {
  if (isAndroid) return Promise.resolve(false);
  return AddPassModule.canAddPasses;
};
export const addPass = (base64encodedString: string): Promise<void> => {
  if (isAndroid) return Promise.resolve();
  return AddPassModule.addPass(base64encodedString);
};
