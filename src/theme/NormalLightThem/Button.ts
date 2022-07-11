import {
  ButtonHeight,
  FontFamily,
  LightAppColors,
  NormalFontSize,
  RoundStyles,
} from '../variables';

const center = {
  justifyContent: 'center',
  alignItems: 'center',
};

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
        ...center,
        backgroundColor: LightAppColors.primary,
        height: ButtonHeight.normal,
        borderRadius: RoundStyles.round4,
      },
    },
    primaryOutline: {
      titleStyle: {
        fontSize: NormalFontSize.text,
        color: LightAppColors.primary,
      },
      buttonStyle: {
        ...center,
        backgroundColor: LightAppColors.white,
        height: ButtonHeight.normal,
        borderWidth: 1,
        borderColor: LightAppColors.primary,
        borderRadius: RoundStyles.round4,
      },
    },
    primaryClear: {
      titleStyle: {
        fontSize: NormalFontSize.text,
        color: LightAppColors.white,
      },
      buttonStyle: {
        ...center,
        backgroundColor: LightAppColors.clear,
        height: ButtonHeight.normal,
        borderRadius: RoundStyles.round4,
      },
    },
    grayOutline: {
      titleStyle: {
        fontSize: NormalFontSize.text,
        color: LightAppColors.grey2,
      },
      buttonStyle: {
        ...center,
        backgroundColor: LightAppColors.clear,
        borderWidth: 1,
        borderColor: LightAppColors.grey2,
        borderStyle: 'solid',
        height: ButtonHeight.normal,
        borderRadius: RoundStyles.round4,
      },
    },
  },
  ButtonHeight: {
    normal: ButtonHeight.normal,
    small: ButtonHeight.small,
    smaller: ButtonHeight.smaller,
  },
};
