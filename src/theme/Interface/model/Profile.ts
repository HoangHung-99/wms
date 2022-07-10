import {MenuProfile} from 'app/theme/Interface/model/MenuProfile';
import {UserInfo} from 'app/theme/Interface/model/UserInfo';

export type Profile = {
  info: UserInfo;
  menus: Array<MenuProfile>;
};
