import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class Post extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Author: {this.props.author}</Text>
        <Text>Title: {this.props.title}</Text>
        <Text>Subreddit: {this.props.subreddit}</Text>
        <Text>Score: {this.props.score}</Text>
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
