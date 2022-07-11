import {createReducer} from '@reduxjs/toolkit';
import {ThemeActionType} from '../actionTypes';

import {Button, Colors, Text, Padding} from '~/theme/NormalLightThem';
import ScreenAlign from '~/theme/Styles';

const initialState = {
  ...Button,
  ...Colors,
  ...Text,
  ...Padding,
  ...ScreenAlign,
};

export default createReducer(initialState, builder =>
  builder.addCase(
    ThemeActionType.themeConfig,
    (state: {[key: string]: any}) => {
      state;
    },
  ),
);
