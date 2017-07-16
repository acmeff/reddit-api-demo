import React from 'react';
import { Text, View, Image } from 'react-native';

export default class Post extends React.Component {
  render() {
    console.log(this.props);
    return (
      <View>
        <Text>{this.props.author}</Text>
        <Text>{this.props.title}</Text>
        <Text>{this.props.subreddit}</Text>
        <Text>{this.props.score}</Text>
      </View>
    );
  }
}
