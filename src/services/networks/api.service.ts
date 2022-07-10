import {IObjectPromise} from '~/@helpers/utils';
import {
  AxiosHttpClient,
  IAxiosRequestOptions,
} from '../../@helpers/network/AxiosHttpClient';
import {configEnv} from '../../@config';

// const timeout = 10000;
export class ApiService {
  private httpClient: AxiosHttpClient;

  constructor(config: {
    baseurl: string;
    options: IAxiosRequestOptions;
    interceptors?: IObjectPromise;
  }) {
    this.httpClient = new AxiosHttpClient(config);
  }
  async get<T = any>(endpoint: string, params: any = {}): Promise<T> {
    try {
      const res = await this.httpClient.get<T>(endpoint, params);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async post<T = any>(endpoint: string, body: any = {}): Promise<T> {
    try {
      const res = await this.httpClient.post<T>(endpoint, body);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}

const {host, hostAuth, login} = configEnv();

export const apiService = new ApiService({
  baseurl: host,
  options: {
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  },
  interceptors: {},
});

export const authApiService = new ApiService({
  baseurl: hostAuth,
  options: {
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  },
  interceptors: {},
});
export const loginApiService = new ApiService({
  baseurl: login,
  options: {
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  },
  interceptors: {},
});
