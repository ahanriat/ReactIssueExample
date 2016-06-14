import React, { PropTypes, Component } from 'react';
import NavigationCardStack from 'NavigationCardStack';

import ScrollExample from './ScrollExample';
import Home from './Home';

class ApplicationNavigator extends Component {

  static propTypes = {
    navigationState: PropTypes.object,
    onNavigate: PropTypes.func.isRequired,
  };

  render() {
    const { navigationState, onNavigate } = this.props;
    return (
      <NavigationCardStack
        direction={'vertical'}
        navigationState={navigationState}
        onNavigate={onNavigate}
        renderScene={this._renderScene.bind(this)}
      />
  );
  }

  _renderScene({scene}) {
    const { navigationState } = scene;
    switch (navigationState.key) {
      case 'Home':
        return <Home onPressPushButton={() => this.props.onNavigate('push', 'ScrollExample')}/>;
      case 'ScrollExample':
        return <ScrollExample />
      default:
        return false;
    }
  }
}

export default ApplicationNavigator;
