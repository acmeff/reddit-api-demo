import React from 'react';
import { Text,
         View,
         Image,
         StyleSheet,
         TouchableHighlight } from 'react-native';

export default class Post extends React.Component {

  onPressPost() {
    this.props.getPost({post: this.props});
    this.props.nav.navigate('detail');
  }

  render() {

    return (
      <TouchableHighlight
        onPress={this.onPressPost.bind(this)}>
        <View style={styles.container}>
          <Image
            style={{width: 50, height:  50}}
            source={{uri: `${this.props.thumbnail}`}}/>
          <Text>Author: {this.props.author}</Text>
          <Text>Title: {this.props.title}</Text>
          <Text>Subreddit: {this.props.subreddit}</Text>
          <Text>Upvotes: {this.props.ups}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
    borderWidth: 1,
    borderColor: '#000'

  },
});
