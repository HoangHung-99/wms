import {createSelector} from 'reselect';

const getPersistentStorage = (state: any) => state?.persistentStorage;

export function createTokenSelector() {
  return createSelector(
    [getPersistentStorage],
    (persistentStorage: any) => persistentStorage?.token,
  );
}

export function createRefreshTokenSelector() {
  return createSelector(
    [getPersistentStorage],
    (persistentStorage: any) => persistentStorage?.refreshToken,
  );
}

export function createLanguagesSelector() {
  return createSelector([getPersistentStorage], state => state?.language);
}

export function createCurrentLanguagesSelector() {
  return createSelector([getPersistentStorage], state => state?.currentLang);
}

export function createStatusSelector() {
  return createSelector([getPersistentStorage], state => state?.status);
}

export function createIsLoadingStartSelector() {
  return createSelector([getPersistentStorage], state => state?.isLoadingStart);
}
