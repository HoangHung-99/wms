import {IEnvConfig, ENV_BUILD_DAPP} from './common';
import appEnv from './app.env';

export function configEnv(): IEnvConfig {
  const envName = process.env.NODE_ENV || 'development';
  const envNameApp = ENV_BUILD_DAPP[envName] || 'debug';

  const currentConfig = appEnv[envNameApp];
  return currentConfig;
}
