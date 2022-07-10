export interface IEnvConfig {
  host: string;
  apikey: string;
  hostAuth: string;
  login: string;
  hostMedia: string;
  userService: string;
  appSecret: {
    android: string;
    ios: string;
  };
  authConfig: {
    issuer: string;
    clientId: string;
    redirectUrl: string;
    scopes: Array<string>;
    usePKCE: Boolean;
  };
  environment?: string;
}
export interface IAppEnv {
  release: IEnvConfig;
  debug: IEnvConfig;
}
export const ENV_BUILD_DAPP = {
  production: 'release',
  development: 'debug',
};
