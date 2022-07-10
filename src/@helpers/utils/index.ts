import moment from 'moment';
import {apiService, ApiService} from '../../services/networks/api.service';
import {connect} from 'react-redux';

export interface IObject {
  [key: string]: string;
}

export interface IObjectPromise<T = any> {
  [key: string]: () => Promise<T>;
}

const parseJson = <T = any>(input: any) => {
  try {
    const resJson = JSON.parse(input) as T;
    if (!resJson) {
      return {};
    }
    return resJson;
  } catch (error) {
    return {};
  }
};

const arrayToObject = (arr: Array<any>, key: string | number) => {
  return arr.reduce((obj, item) => {
    obj[item[key]] = item;
    return obj;
  }, {});
};

const roundNumber = (value: number, roundnumber = 8) => {
  let tValue: number = value * 10 ** roundnumber;

  return Math.round(tValue) / 10 ** roundnumber;
};

const subStringRight = (Str: String, l: number = 8) => {
  try {
    if (!Str) {
      return '';
    }
    let min = Math.max(0, Str.length - l);
    return Str.substring(min, Str.length);
  } catch (error) {
    return '';
  }
};

const pipeDate = (input: Date, pattern = 'DD/MM/yyyy') => {
  try {
    const output = moment(input).format(pattern);
    return output;
  } catch (error) {
    return '';
  }
};

const getObjectKeyValue = (object: string, param: string) => {
  try {
    var params = param.split('.');
    var obj = object;
    params.forEach((el: any) => {
      if (obj !== '') {
        obj = obj[el] || '';
      }
    });
    return obj;
  } catch (error) {
    return undefined;
  }
};

const checkIsIOSString = (value?: string) => {
  try {
    const date = new Date(Date.parse(value || ''));
    if (date.toString() !== 'Invalid Date' && date.toISOString() === value) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

const formatTimeString = (value?: string, format: string = 'DD-MM-YYYY') => {
  if (!value) {
    return value;
  }
  return moment(value).format(format);
};

const capitalize = (str: string) => {
  if (typeof str !== 'string') {
    return '';
  }
  if (!str) {
    return '';
  }
  return str
    .split(' ')
    .map(s => {
      if (s.length === 1) {
        return s.toUpperCase();
      }
      try {
        const firstLetter = s.split('')[0].toUpperCase();
        const restOfStr = s.substr(1, s.length).toLowerCase();
        return firstLetter + restOfStr;
      } catch (error) {
        return s;
      }
    })
    .join(' ');
};

function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const sleep = async (fn: Function, ms: number) => {
  await timeout(ms || 1000);
  return fn();
};

const removeAscent = (str: string) => {
  if (str === null || str === undefined) {
    return str;
  }
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  return str;
};

export function connectToRedux({
  component,
  stateProps = () => ({}),
  dispatchProps = () => ({}),
}: {
  component: any;
  stateProps?: Function;
  dispatchProps?: Function;
}) {
  const mapStateToProps = () => stateProps;

  const mapDispatchToProps = dispatchProps;

  return connect(mapStateToProps, mapDispatchToProps)(component);
}

const promiseAllObject = async (promiseObj: IObjectPromise = {}) => {
  const list = [];
  for (let index = 0; index < Object.keys(promiseObj).length; index++) {
    const key = Object.keys(promiseObj)[index];
    list.push(promiseObj[key]());
  }
  const res = await Promise.all(list);
  const output = {};
  for (let index = 0; index < Object.keys(promiseObj).length; index++) {
    const key = Object.keys(promiseObj)[index];
    Object.assign(output, {
      [key]: res[index],
    });
  }
  return output;
};

export function getApiServiceByClient(): ApiService {
  return apiService;
}

/**
 * get [[ApiService]] by the client code stored in the app
 */
export async function getApiServiceByInAppClientCode(): Promise<ApiService> {
  const rt: ApiService = getApiServiceByClient();
  return rt;
}

export const Utils = {
  pipeDate,
  getObjectKeyValue,
  formatTimeString,
  checkIsIOSString,
  subStringRight,
  roundNumber,
  parseJson,
  promiseAllObject,
  arrayToObject,
  capitalize,
  sleep,
  removeAscent,
};
