export namespace UserLogin {
  export class LoginRequest {
    user?: string;
    pass?: string;
    fcmToken?: string;
    partnerCode?: string;
    platform?: string;
    deviceUniqueId?: string;
    version?: string;
  }

  export class UserDto {
    token?: string;
    userId?: string;
    username?: string;
    isMasterUser?: boolean;
    susr1?: any;
    susr2?: any;
    susr3?: any;
    susr4?: any;
    susr5?: any;
    firstName?: string;
    lastName?: string;
    email?: string;
    tel?: string;
    clientId?: string;
    clientCode?: string;
    isMasterClient?: boolean;
    domain?: string;
    socketUrl?: string;
    socketKey?: string;
    backendUrl?: string;
    ignoreExternReceiptKey?: boolean;
    ignoreExternOrderKey?: boolean;
    onlyQcverifyShip?: boolean;
    skuUpcRelation?: string;
    warehouse?: {[key: string]: Warehouse};
    logo?: string;
    avatar?: string;
    expired?: Date;
  }
  export class Warehouse {
    code?: string;
    isVisiable?: boolean;
    name?: string;
    branchCode?: null | string;
    susr02?: string;
    susr03?: string;
    susr04?: string;
    susr05?: string;
    storer?: {
      [key: string]: {
        code?: string;
        name?: string;
      };
    };
  }
}
