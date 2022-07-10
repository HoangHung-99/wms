import {ESize} from '../enum';
import fontSize from './fontSize';
import {colors} from 'react-native-elements';
const colorStatic = {
  ...colors,
  transparent: 'transparent',
  white: '#fff',
  backgroundLoading: 'rgba(0,0,0,0.5)',
  third: '#FF6600',
};
export default {
  halfWidth: (ESize.widthScreen - 30) / 2,
  fullWidth: ESize.widthScreen - 22,
  default: {
    margin: {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10,
    },
    colors: {
      ...colorStatic,
      third: colorStatic.primary,
      success: '#2ECC71',
      primary: '#1F4A7C',
      secondary: '#f2dfdf',
      grey0: '#5F686C',
      grey1: '#16759b',
      grey2: '#e8e8e8',
      grey3:
        'linear-gradient(0deg, rgba(0, 0, 0, 0.38), rgba(0, 0, 0, 0.38)), rgba(18, 18, 18, 0.38)',
      grey4: '#263238',
      grey5: '#F0F0F0',
      white: 'white',
      textColor: '#979797',
    },
    Text: {
      style: {
        fontSize: fontSize.fontSize15,
      },
      h1Style: {
        fontSize: fontSize.fontSizeH1,
      },
      h2Style: {
        fontSize: fontSize.fontSize20,
      },
      h3Style: {
        fontSize: fontSize.fontSize18,
      },
      h4Style: {
        fontSize: fontSize.fontSize16,
      },
      boldText: {
        fontWeight: 'bold',
      },
      normalText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        lineHeight: 16,
      },
    },
    fonts: {
      roboto: 'Roboto-Regular',
      robotoMedium: 'Roboto-Medium',
    },
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollView: {
    paddingBottom: 200,
    flexDirection: 'row',
    width: ESize.widthScreen,
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    flexWrap: 'wrap',
  },
};
