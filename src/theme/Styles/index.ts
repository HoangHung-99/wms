import {ESize} from '../../common/enum';

export default {
  ScreenAlign: {
    HalfWidth: (ESize.widthScreen - 30) / 2,
    FullWidth: ESize.widthScreen - 22,
    Container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    Wrapper: {
      backgroundColor: 'white',
      flex: 1,
    },
    ScrollView: {
      paddingBottom: 200,
      flexDirection: 'row',
      width: ESize.widthScreen,
      alignItems: 'flex-start',
      alignContent: 'flex-start',
      flexWrap: 'wrap',
    },
  },
};
