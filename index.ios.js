import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  AppRegistry,
  NavigationExperimental,
} from 'react-native';
import ApplicationNavigator from './src/ApplicationNavigator';

const {
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

class CardStackPanResponderExample extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      navigationState: {
        index: 0,
        key: 'root',
        children: [{key: 'Home'}],
      },
    };
    this._onNavigationChange = this._onNavigationChange.bind(this);
  }

  render() {
    return (
      <ApplicationNavigator
        navigationState={this.state.navigationState}
        onNavigate={this._onNavigationChange}
      />
    );
  }

  _onNavigationChange(type, key = 'Home'): void {
    let {navigationState} = this.state;
    switch (type) {
      case 'push':
        const route = {key};
        navigationState = NavigationStateUtils.push(navigationState, route);
        break;

      case 'pop':
        navigationState = NavigationStateUtils.pop(navigationState);
        break;
    }

    if (this.state.navigationState !== navigationState) {
      this.setState({navigationState});
    }
  }

}


AppRegistry.registerComponent('CardStackPanResponderExample', () => CardStackPanResponderExample);
