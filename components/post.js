import React from 'react';
import { Text, View, Image } from 'react-native';

export default class Post extends React.Component {
  render() {
    return (
      <View>
        <Text>Author: {this.props.author}</Text>
        <Text>Title: {this.props.title}</Text>
        <Text>Subreddit: {this.props.subreddit}</Text>
        <Text>Score: {this.props.score}</Text>
      </View>
    );
  }
}
