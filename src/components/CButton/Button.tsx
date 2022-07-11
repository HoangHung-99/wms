import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connectToRedux} from '~/@helpers/utils';
import {createButtonSelector} from '~/stores/selectors/ThemeSelectors';

import {ButtonTypes} from '~/common/constants';
import {ESize} from '~/common/enum';

export type BtnType =
  | 'Primary'
  | 'PrimaryClear'
  | 'PrimaryOutline'
  | 'GrayOutline';

interface IBtn extends TouchableOpacity {
  Button?: {
    [styleName: string]: {
      titleStyle?: object;
      buttonStyle?: object;
    };
  };
  title?: string;
  btnType?: BtnType;
  width?: number;
}

const ButtonComponents = (props: IBtn) => {
  const {width = 0.5, Button, title, btnType, ...rest} = props;
  let buttonStyle = {};
  let titleStyle = {};
  switch (btnType) {
    case ButtonTypes.Primary:
      buttonStyle = {...Button.primary.buttonStyle};
      titleStyle = {...Button.primary.titleStyle};
      break;
    case ButtonTypes.PrimaryClear:
      buttonStyle = {...Button.primaryClear.buttonStyle};
      titleStyle = {...Button.primaryClear.titleStyle};
      break;
    case ButtonTypes.PrimaryOutline:
      buttonStyle = {...Button.primaryOutline.buttonStyle};
      titleStyle = {...Button.primaryOutline.titleStyle};
      break;
    case ButtonTypes.GrayOutline:
      buttonStyle = {...Button.grayOutline.buttonStyle};
      titleStyle = {...Button.grayOutline.titleStyle};
      break;
    default:
      buttonStyle = {...Button.primary.buttonStyle};
      titleStyle = {...Button.primary.titleStyle};
      break;
  }

  return (
    <View style={{width: width * ESize.widthScreen}}>
      <TouchableOpacity style={buttonStyle} {...rest}>
        <Text style={titleStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default connectToRedux({
  component: ButtonComponents,
  stateProps: (state: any) => ({
    Button: createButtonSelector()(state),
  }),
  dispatchProps: () => {
    return {};
  },
});
