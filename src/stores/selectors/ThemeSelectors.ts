import {createSelector} from 'reselect';

const getTheme = (state: any) => state.theme;

export function createButtonSelector() {
  return createSelector([getTheme], state => state.Button);
}

export function createButtonHeightSelector() {
  return createSelector([getTheme], state => state.ButtonHeight);
}

export function createColorSelector() {
  return createSelector([getTheme], state => state.Colors);
}

export function createTextSelector() {
  return createSelector([getTheme], state => state.Text);
}

export function createFontSelector() {
  return createSelector([getTheme], state => state.Fonts);
}

export function createPaddingSelector() {
  return createSelector([getTheme], state => state.Paddings);
}

export function createScreenSelector() {
  return createSelector([getTheme], state => state.ScreenAlign);
}
