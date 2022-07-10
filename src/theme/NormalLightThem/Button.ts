import {
  ButtonHeight,
  FontFamily,
  LightAppColors,
  NormalFontSize,
} from '../variables';

export default {
  Button: {
    titleStyle: {
      fontFamily: FontFamily.roboto,
    },
    primary: {
      titleStyle: {
        fontSize: NormalFontSize.text,

        color: LightAppColors.white,
      },
      buttonStyle: {
        backgroundColor: LightAppColors.primary,
        height: ButtonHeight.normal,
      },
    },
    primaryOutline: {
      titleStyle: {
        fontSize: NormalFontSize.text,
        color: LightAppColors.primary,
      },
      buttonStyle: {
        backgroundColor: LightAppColors.white,
        height: ButtonHeight.normal,
        borderWidth: 1,
        borderColor: LightAppColors.primary,
      },
    },
    primaryClear: {
      titleStyle: {
        fontSize: NormalFontSize.text,
        color: LightAppColors.white,
      },
      buttonStyle: {
        backgroundColor: LightAppColors.clear,
        height: ButtonHeight.normal,
      },
    },
    grayOutline: {
      titleStyle: {
        fontSize: NormalFontSize.text,
        color: LightAppColors.grey2,
      },
      buttonStyle: {
        backgroundColor: LightAppColors.clear,
        borderWidth: 1,
        borderColor: LightAppColors.grey2,
        borderStyle: 'solid',
        height: ButtonHeight.normal,
      },
    },
  },
  ButtonHeight: {
    normal: ButtonHeight.normal,
    small: ButtonHeight.small,
    smaller: ButtonHeight.smaller,
  },
};
