import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {connectToRedux} from '~/@helpers/utils';
import {createButtonSelector} from '~/stores/selectors/ThemeSelectors';

export type BtnType =
  | 'Primary'
  | 'PrimaryClear'
  | 'PrimaryOutline'
  | 'GrayOutline';

interface IBtn {
  Button?: {
    [styleName: string]: {
      titleStyle?: object;
      buttonStyle?: object;
    };
  };
  title?: string;
  btnType?: BtnType;
}

const ButtonComponents = (props: IBtn) => {
  const {Button, title, btnType} = props;
  let Styles = [];
  switch (btnType) {
    case 'Primary':
      Styles = [
        {...Button.primary.buttonStyle},
        {...Button.primary.titleStyle},
      ];
      break;
    case 'PrimaryClear':
      Styles = [
        {...Button.primaryClear.buttonStyle},
        {...Button.primaryClear.titleStyle},
      ];
      break;
    case 'PrimaryOutline':
      Styles = [
        {...Button.primaryOutline.buttonStyle},
        {...Button.primaryOutline.titleStyle},
      ];
      break;
    case 'GrayOutline':
      Styles = [
        {...Button.grayOutline.buttonStyle},
        {...Button.grayOutline.titleStyle},
      ];
      break;
    default:
      Styles = [
        {...Button.primary.buttonStyle},
        {...Button.primary.titleStyle},
      ];
      break;
  }

  return (
    <TouchableOpacity style={Styles}>
      <Text>{title}</Text>
    </TouchableOpacity>
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
