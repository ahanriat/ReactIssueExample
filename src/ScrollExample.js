import React, { Component, PropTypes } from 'react';
import { ListView, StyleSheet, View } from 'react-native';
import _ from 'lodash';

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: 'gray',
    borderRadius: 3,
    margin: 13,
  },
});

class DummyView extends Component {

  static propTypes = {
    style: View.propTypes.style,
  };

  render() {
    return <View style={[styles.container, this.props.style]} />;
  }
}


class DummyListView extends Component {

  static propTypes = {
    numberOfElements: PropTypes.number,
  };

  static defaultProps = {
    numberOfElements: 50,
  };

  constructor(context, props) {
    super(context, props);
    this.state = {
      ds: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
    };
    this.renderRow = this.renderRow.bind(this);
  }

  render() {
    const ids = _.range(0, this.props.numberOfElements);
    const map = {};
    ids.forEach(id => {map[id] = id;});
    const dataSource = this.state.ds.cloneWithRows(map, ids);
    return (
      <ListView
        style={{backgroundColor: 'black'}}
        dataSource={dataSource}
        renderRow={this.renderRow}
      />
    );
  }

  renderRow() {
    return <DummyView />;
  }

}

export default DummyListView;
