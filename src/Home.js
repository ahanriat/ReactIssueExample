import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Home extends Component {

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableOpacity onPress={this.props.onPressPushButton}>
          <Text>PUSH</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

export default Home;
