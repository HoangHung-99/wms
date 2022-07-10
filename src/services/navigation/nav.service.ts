import React from 'react';
import {
  NavigationContainerRef,
  StackActions,
  DrawerActions,
  CommonActions,
  NavigationAction,
} from '@react-navigation/native';

export class NavService {
  public navigationRef = React.createRef<NavigationContainerRef>();
  private routeNamePrev: string = '';
  private get navRef(): NavigationContainerRef {
    return this.navigationRef.current;
  }
  private dispatch(action: NavigationAction) {
    this.navRef.dispatch(action);
  }

  navigate(routeName, params: object = {}) {
    try {
      const currentRouter = this.navRef.getCurrentRoute();
      if (currentRouter && currentRouter.name) {
        this.routeNamePrev = currentRouter.name;
      } else {
        this.routeNamePrev = '';
      }
      this.navRef.navigate(routeName, params);
    } catch (error) {
      console.log('-------------------');
      console.log(error);
      console.log('-------------------');
    }
  }
  push(routeName, params?: object) {
    try {
      this.dispatch(StackActions.push(routeName, params));
    } catch (error) {
      console.log('-------------------');
      console.log(error);
      console.log('-------------------');
    }
  }

  goBack() {
    if (this.navRef.canGoBack()) {
      this.dispatch(CommonActions.goBack());
    }
  }

  toggleDrawer() {
    try {
      this.dispatch(DrawerActions.toggleDrawer());
    } catch (error) {
      console.log('-------------------');
      console.log(error);
      console.log('-------------------');
    }
  }
  closeDrawer() {
    try {
      this.dispatch(DrawerActions.closeDrawer());
    } catch (error) {
      console.log('-------------------');
      console.log(error);
      console.log('-------------------');
    }
  }
  openDrawer() {
    try {
      this.dispatch(DrawerActions.openDrawer());
    } catch (error) {
      console.log('-------------------');
      console.log(error);
      console.log('-------------------');
    }
  }
  reset(screenName) {
    this.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: screenName}],
      }),
    );
  }
}

export default new NavService();
