import {Dimensions, Platform} from 'react-native';
export const ESize = {
  widthWindow: Dimensions.get('window').width,
  heightWindow: Dimensions.get('window').height,
  widthScreen: Dimensions.get('screen').width,
  heightScreen: Dimensions.get('window').height,
  heightHeader: Platform.OS === 'android' ? 54 : 44,
};
