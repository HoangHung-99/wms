import React, {useState} from 'react';
import {View, ScrollView, Image, StyleSheet, Button} from 'react-native';
import {TextInput} from 'react-native-paper';

import {IMAGES} from '../../../assets/images';

import Styles from '../../../theme/Styles';
import {connectToRedux} from '../../../@helpers/utils';
import {configEnv} from '../../../@config';
import toastService from '../../../services/toast/toast.service';
import {AppActions} from '../../../stores/actions';
import {FButton} from '../../../components/FButton';
import {signIn} from '../../../API/Auth/ApiService';

interface IProps {
  loginSync: Function;
}

const LoginScreen = (props: IProps) => {
  const {loginSync} = props;
  const [pass, setPass] = useState('1234');
  const [userName, setUserName] = useState('hung1');
  const [passSecureTextEntry, setPassSecureTextEntry] = useState(true);

  const checkValueValidate = () => {
    if (!userName && !pass) {
      //   toastService.error(i18next.t('empty_user_and_pass_err'));
      toastService.error('empty_user_and_pass_err');
      return false;
    }
    if (!userName) {
      //   toastService.error(i18next.t('empty_user_err'));
      toastService.error('empty_user_err');
      return false;
    }
    if (!pass) {
      //   toastService.error(i18next.t('empty_pass_err'));
      toastService.error('empty_pass_err');
      return false;
    }
    return true;
  };

  const handlePressLoginButton = async () => {
    try {
      //   if (!checkValueValidate()) {
      //     return;
      //   }
      console.log('login');
      //   loginSync({
      //     user: userName,
      //     pass: pass,
      //   });
      let res = await signIn({
        user: userName,
        pass: pass,
      });
      console.log(res);
      
    } catch (error) {
      console.log('eeee', error);
    }
  };
  return (
    <View>
      <Button title="login" onPress={() => handlePressLoginButton()} />
    </View>
  );
};

export default connectToRedux({
  component: LoginScreen,
  stateProps: (state: any) => ({
    // token: createTokenSelector()(state),
  }),
  dispatchProps: (dispatch: any) => {
    return {
      loginSync: (evt: any) => dispatch(AppActions.loginSync(evt)),
    };
  },
});

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    // width: '100%',
    // height: '100%',
  },
  logoWrapper: {
    width: '100%',
    marginTop: 30,
    height: 80,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  welcomeTitle: {
    marginTop: 12,
    alignSelf: 'center',
  },
  subTitle: {
    alignSelf: 'center',
  },
  bodyWrapper: {
    marginTop: '10%',
    width: '100%',
    alignItems: 'center',
  },
  loginButtonContainer: {
    width: '90%',
  },
  loginText: {
    textAlign: 'center',
  },
});
