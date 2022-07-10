import {
  authApiService,
  loginApiService,
} from '../../../services/networks/api.service';
import {UserLogin} from '../Interface';

import EndPoint from '../EndPoint';

const signIn = async (body: UserLogin.LoginRequest) => {
  try {
    const res = (await loginApiService.post(
      EndPoint.Login,
      body,
    )) as UserLogin.UserDto;
    return res;
  } catch (error) {
    throw error;
  }
};
const authenticate = async () => {
  try {
    const res = (await authApiService.post(
      EndPoint.Authenticate,
    )) as UserLogin.UserDto;
    return res;
  } catch (error) {
    throw error;
  }
};

export {signIn, authenticate};
