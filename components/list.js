import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Post from './post';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = { data:  'nothing yet' };
  }

  componentDidMount() {
    fetch('https://www.reddit.com/.json').then(res => {
      let one = res['_bodyInit'];
      let data = JSON.parse(one);
      this.setState({ data: data.data.children[0].data });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Post author={this.state.data.author}
              title={this.state.data.title}
              score={this.state.data.score}
              subreddit={this.state.data.subreddit}/>
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
