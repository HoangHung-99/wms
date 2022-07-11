import React from 'react';
import {Platform, View} from 'react-native';
import {Input, InputProps} from 'react-native-elements';

import {connectToRedux} from '~/@helpers/utils';
import {ESize} from '~/common/enum';
import {createColorSelector} from '~/stores/selectors/ThemeSelectors';

interface ITextInput extends InputProps {
  type?: 'default' | 'circle' | 'square';
  forwardRef?: any;
  Colors?: {
    [colorName: string]: string;
  };
  width?: number;
}

const NormalInput = (props: ITextInput) => {
  const {Colors, width = 1} = props;
  const defineStyleByType = () => {
    const {
      inputContainerStyle: inputContainerStyleOld = {},
      inputStyle: inputStyleOld = {},
      rightIconContainerStyle: rightIconContainerStyleOld = {},
      type = 'default',
      ...resProps
    } = props;

    const {leftIcon, rightIcon, disabled} = resProps;
    const isIcon = leftIcon || rightIcon;
    const inputStyle = Object.assign(
      {},
      {
        marginLeft: leftIcon ? 5 : 5,
        marginRight: rightIcon ? 5 : 5,
        color: Colors.primary,
      },
      inputStyleOld,
    );

    const leftIconContainerStyle = Object.assign(
      {},
      {
        marginLeft: 5,
      },
    );
    const rightIconContainerStyle = Object.assign(
      {},
      {
        marginRight: 5,
      },
      rightIconContainerStyleOld,
    );
    const commonStyleInput = {
      borderWidth: 1,
      borderColor: disabled ? Colors.divider : Colors.primary,
    };
    if (Platform.OS !== 'android') {
      Object.assign(commonStyleInput, {
        paddingTop: isIcon ? 0 : 3,
        paddingBottom: isIcon ? 0 : 3,
      });
    }
    if (type === 'circle') {
      const inputContainerStyle = Object.assign(
        {},
        commonStyleInput,
        {
          borderRadius: 50,
        },
        inputContainerStyleOld,
      );

      return {
        inputContainerStyle,
        inputStyle,
        leftIconContainerStyle,
        rightIconContainerStyle,
      };
    }
    if (type === 'square') {
      const inputContainerStyle = Object.assign(
        {},
        commonStyleInput,
        {
          borderRadius: 5,
        },
        inputContainerStyleOld,
      );
      return {
        inputContainerStyle,
        inputStyle,
        leftIconContainerStyle,
        rightIconContainerStyle,
      };
    }
    const inputContainerStyle = Object.assign(
      {},
      commonStyleInput,
      inputContainerStyleOld,
    );
    return {
      inputContainerStyle,
      inputStyle,
      leftIconContainerStyle,
      rightIconContainerStyle,
    };
  };
  const newStyle = defineStyleByType();

  const {
    inputContainerStyle,
    inputStyle,
    leftIconContainerStyle,
    rightIconContainerStyle,
  } = newStyle;

  const {
    clearTextOnFocus,
    forwardRef,
    autoFocus,
    showSoftInputOnFocus = true,
    ...resProps
  } = props;

  const {leftIcon, rightIcon} = resProps;
  return (
    <View>
      <Input
        ref={forwardRef}
        containerStyle={{width: ESize.widthScreen * width}}
        underlineColorAndroid={Colors.transparent}
        inputContainerStyle={inputContainerStyle}
        inputStyle={inputStyle}
        leftIconContainerStyle={leftIcon ? leftIconContainerStyle : {}}
        rightIconContainerStyle={rightIcon ? rightIconContainerStyle : {}}
        placeholder="--"
        autoCapitalize="none"
        autoFocus={autoFocus}
        clearTextOnFocus={clearTextOnFocus}
        showSoftInputOnFocus={showSoftInputOnFocus}
        {...(resProps as any)}
      />
    </View>
  );
};

export default connectToRedux({
  component: NormalInput,
  stateProps: (state: any) => ({
    Colors: createColorSelector()(state),
  }),
  dispatchProps: () => {
    return {};
  },
});
