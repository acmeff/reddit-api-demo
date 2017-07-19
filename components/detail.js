import React from 'react';
import { Text,
         View,
         Image,
         StyleSheet } from 'react-native';

export default class Detail extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Detail</Text>
        <Image
          style={{width: 100, height:  100}}
          source={{uri: `${this.props.detail.post.thumbnail}`}}/>
        <Text>Author: {this.props.detail.post.author}</Text>
        <Text>Title: {this.props.detail.post.title}</Text>
        <Text>Subreddit: {this.props.detail.post.subreddit}</Text>
        <Text>Upvotes: {this.props.detail.post.ups}</Text>
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
