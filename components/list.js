import React from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import Post from './post';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = { dataSource: this.ds.cloneWithRows(this.props.current_data) };
  }

  componentDidMount() {
    this.props.fetchFeed()
      .then(() => this.setState({ dataSource: this.ds.cloneWithRows(this.props.current_data)}));
  }


  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Post {...rowData.data}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
