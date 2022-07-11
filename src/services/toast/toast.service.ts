// import FToast from './FToast';

import {ApiException} from '~/@helpers/network/common';
import i18next from 'i18next';

const DURATION = 2000;

class ToastService {
  private ref: any;

  setRefContainer(ref: any) {
    this.ref = ref;
  }

  success = (message: string = '', duration: number = DURATION) => {
    try {
      this.ref.showToast({
        type: 'success',
        message: message,
        duration,
        iconName: 'checkcircleo',
        iconType: 'antdesign',
      });
    } catch (error) {}
  };
  error = (message: string = '', duration: number = DURATION) => {
    try {
      this.ref.showToast({
        type: 'error',
        message: message,
        duration,
        iconName: 'exclamationcircleo',
        iconType: 'antdesign',
      });
    } catch (error) {}
  };

  errorModal = (message: string = '', onPressOK?: Function) => {
    try {
      this.ref.showModal({
        position: 'center',
        message: message,
        type: 'error',
        onPressOK: onPressOK,
      });
    } catch (error) {}
  };

  info = (message: string = '', duration: number = DURATION) => {
    try {
      this.ref.showToast({
        type: 'info',
        message: message,
        duration,
      });
    } catch (error) {}
  };
  warning = (message: string = '', duration: number = DURATION) => {
    try {
      this.ref.showToast({
        type: 'warning',
        message: message,
        duration,
        iconName: 'infocirlceo',
        iconType: 'antdesign',
      });
    } catch (error) {}
  };

  handlerException = async (err: any, onPressOK?: Function) => {
    let message = i18next.t('error_unknown');
    if (err instanceof ApiException) {
      if (err && err?.message && typeof err?.message === 'string') {
        message = err.message;
      }
      if (
        err &&
        err.data &&
        err.data.error_description &&
        typeof err.data.error_description === 'string'
      ) {
        message = err?.data?.error_description;
      }
      if (
        err &&
        err.data &&
        err.data.message &&
        typeof err.data.message === 'string'
      ) {
        message = err?.data?.message;
      }
      if (
        err &&
        err.data &&
        err.data.Message &&
        typeof err.data.Message === 'string'
      ) {
        message = err?.data?.Message;
      }
      if (
        err &&
        err.data &&
        Array.isArray(err.data) &&
        err.data[0] &&
        typeof err.data[0].Message === 'string'
      ) {
        message = err.data[0].Message;
      }
    }
    // this.error(message);
    this.errorModal(message, onPressOK);
  };
}

export default new ToastService();
