import React from 'react';
import { Text,
         View,
         Image,
         StyleSheet } from 'react-native';

export default class Detail extends React.Component {

  render() {
    const { detail } = this.props;
    
    return (
      <View style={styles.container}>
        <Text>Detail</Text>
        <Image
          style={{width: 100, height:  100}}
          source={{uri: `${detail.post.thumbnail}`}}/>
        <Text>Author: {detail.post.author}</Text>
        <Text>Title: {detail.post.title}</Text>
        <Text>Subreddit: {detail.post.subreddit}</Text>
        <Text>Upvotes: {detail.post.ups}</Text>
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
