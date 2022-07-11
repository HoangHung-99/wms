import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import {NormalInput} from '~/components/CInput';
import {TouchableButton} from '~/components/CButton';

import {connectToRedux} from '~/@helpers/utils';
import toastService from '~/services/toast/toast.service';
import {AppActions} from '~/stores/actions';
import {createTokenSelector} from '~/stores/selectors/PersistentStorageSelectors';
import {createScreenSelector} from '~/stores/selectors/ThemeSelectors';

interface IProps {
  loginSync?: Function;
  ScreenAlign?: {[styleName: string]: object};
}

const LoginScreen = (props: IProps) => {
  const {loginSync, ScreenAlign} = props;
  const [passWord, setPassWord] = useState('');
  const [userName, setUserName] = useState('');
  const [passSecureTextEntry, setPassSecureTextEntry] = useState(true);

  const checkValueValidate = () => {
    if (!userName && !passWord) {
      //   toastService.error(i18next.t('empty_user_and_pass_err'));
      toastService.error('empty_user_and_pass_err');
      return false;
    }
    if (!userName) {
      //   toastService.error(i18next.t('empty_user_err'));
      toastService.error('empty_user_err');
      return false;
    }
    if (!passWord) {
      //   toastService.error(i18next.t('empty_pass_err'));
      toastService.error('empty_pass_err');
      return false;
    }
    return true;
  };

  const handlePressLoginButton = async () => {
    try {
      if (!checkValueValidate()) {
        return;
      }
      loginSync({
        user: userName,
        pass: passWord,
      });
    } catch (error) {
      console.log('eeee', error);
    }
  };
  return (
    <View style={ScreenAlign.Container}>
      <NormalInput
        type="circle"
        placeholder={'Username'}
        width={0.8}
        onChangeText={value => setUserName(value)}
        returnKeyType={'next'}
        placeholderTextColor="#979797"
        onSubmitEditing={() => {}}
        value={userName}
        leftIcon={{
          type: 'font-awesome',
          name: 'user',
          //   color: primary,
        }}
      />
      <NormalInput
        type="circle"
        width={0.8}
        placeholder={'Password'}
        onChangeText={value => setPassWord(value)}
        returnKeyType={'next'}
        placeholderTextColor="#979797"
        onSubmitEditing={() => {}}
        secureTextEntry={passSecureTextEntry}
        value={passWord}
        leftIcon={{
          type: 'font-awesome',
          name: 'user',
          //   color: primary,
        }}
      />
      <TouchableButton
        title={'Login'}
        btnType="Primary"
        // width={0.5}
        onPress={() => handlePressLoginButton('login')}
      />
    </View>
  );
};

export default connectToRedux({
  component: LoginScreen,
  stateProps: (state: any) => ({
    token: createTokenSelector()(state),
    ScreenAlign: createScreenSelector()(state),
  }),
  dispatchProps: (dispatch: any) => {
    return {
      loginSync: (evt: any) => dispatch(AppActions.loginSync(evt)),
    };
  },
});
